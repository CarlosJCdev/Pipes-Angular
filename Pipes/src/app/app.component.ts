import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string= 'Spider Man';
  arreglo= [1,2,3,4,5,6,7,8,9,10];
  PI: number= Math.PI;
  valor: number= 0.3469;
  salario: number= 1000.5;
  idioma: string= 'en';
  soldado= {
    nomnre: 'ryan',
    rango: 'cabo',
    edad: 25
  }
  fecha: Date= new Date();
  valorProsema= new Promise<string> ((resolve)=>{
    setTimeout(() => {
      resolve('Llego la info');
    }, 3500);
  })
}
