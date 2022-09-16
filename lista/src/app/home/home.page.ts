import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  variavel_lista = [];
  variavel_n = []; 
  texto: string = "";
  valor: string = "";
  soma: string = "0";
  

  adiciona() {

    let numero = parseFloat (this.valor)
    let soma = parseFloat (this.soma)

    if (!(this.texto == "")) {
      this.variavel_lista.push(this.texto);
      this.texto = "";
    }
    if (!(this.valor == "")) {
      this.soma = (numero + soma).toString()
      this.variavel_n.push(this.valor);
      this.valor = "";
    }
    
    
    

    
    


      /*
    if (this.texto == "") {

    } else{
      this.variavel_lista.push(this.texto);
      this.texto = "";
    }*/
   
  }
   remove (indice) {

    let numero = parseInt (this.variavel_n [indice])
    let soma = parseInt (this.soma)

    this.soma = (soma - numero).toString()
    this.variavel_lista.splice(indice, 1)
    this.variavel_n.splice(indice, 1)





   }

  //*ngFor = "let elemento_da_lista of minhaLista" no item
  //[(ngModel)]="texto" no input

}