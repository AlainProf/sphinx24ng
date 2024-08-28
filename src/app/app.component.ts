import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sphinx-ng';

  valeurADeviner;
  essaiCourant:number=0;
  nbEssais=0;
  resultat="";
  classeResultat="";

  constructor(){
    this.valeurADeviner=0;
  }

  demarrer()
  {
    this.valeurADeviner = Math.floor(1 + Math.random()*1000);
    console.log("Nombre à deviner:" + this.valeurADeviner);
  }
 
  verifier()
  {
    this.nbEssais++;
    if (this.essaiCourant < this.valeurADeviner )
      {
         this.resultat = "Trop petit";
         this.classeResultat = "tropBas";
      }
  
      if (this.essaiCourant > this.valeurADeviner )
      {
        this.resultat = "Trop haut";
        this.classeResultat = "tropHaut";
      }
  
      if (this.essaiCourant == this.valeurADeviner )
      {
        this.resultat = "BiINGO!!";
        this.classeResultat = "succes";
      }
  }
}
