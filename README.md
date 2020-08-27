# Ejemplo del uso de los diferentes Pipes

Este poyecto construido en [Angular CLI](https://github.com/angular/angular-cli) en su versión version 9.1.7.

## Lista de Pipes:


- uppercase
- lowercase
- slice (require parametros)
- decimal (requiere parametros)
- currency (requiere parametros)
- Date (requiere parametros) y en ocaciónes configuraciones especiales
- JSON
- LimitTo
- async
- Percent (requiere parametros)

## Código de ejemplo

```javascript
 nombre: string= 'Spider Man';
  arreglo= [1,2,3,4,5,6,7,8,9,10];
  PI: number= Math.PI;
  valor: number= 0.3469;
  salario: number= 1000.5;
  idioma: string= 'en';
  soldado= {
    nombre: 'ryan',
    rango: 'cabo',
    edad: 25
  }
  fecha: Date= new Date();
  valorPromesa= new Promise<string> ((resolve)=>{
    setTimeout(() => {
      resolve('Llego la info');
    }, 3500);
  })

```

### uppercase
```html
<tr>
    <td>{{nombre}}</td>
    <td>uppercase</td>
    <td>{{nombre | uppercase}}</td>
 </tr>
```
salida: SPIDER MAN
### lowercase
```html
<tr>
    <td>{{nombre}}</td>
    <td>lowecase</td>
    <td>{{nombre | lowercase}}</td>
</tr>
```
salida: spider man
### slice
```html
<tr>
    <td>{{nombre}}</td>
    <td>slice:3</td>
     <td>{{nombre | slice: 3}}</td>
</tr>
```
salida: der Man
### slice
```html
<tr>
    <td>{{nombre}}</td>
    <td>slice:3</td>
     <td>{{nombre | slice: 0: 3}}</td>
</tr>
```
salida: Spi
### number
```html
<tr>
    <td>{{PI}}</td>
    <td>decimal/number</td>
    <td>{{PI | number}}</td>
</tr>
```
salida: 3, 142
### number
```html
<tr>
    <td>{{PI}}</td>
    <td>decimal/number</td>
    <td>{{PI | number: '1.0-0'}}</td>
</tr>
```
salida: 3
### number
```html
<tr>
    <td>{{PI}}</td>
    <td>decimal/number</td>
    <td>{{PI | number: '.0-2'}}</td>
</tr>
```
salida: 3, 14
### percent
```html
<tr>
    <td>{{valor}}</td>
    <td>percent</td>
    <td>{{valor | percent}}</td>
</tr>
```
salida: 35%
### percent
```html
<tr>
    <td>{{valor}}</td>
    <td>percent</td>
    <td>{{valor | percent: '2.2-2'}}</td>
</tr>
```
salida: 34, 69%
### currency
```html
<tr>
    <td>{{salario}}</td>
    <td>currency</td>
    <td>{{salario | currency}}</td>
</tr>
```
salida: 1.000,50 US$
### currency
```html
<tr>
    <td>{{salario}}</td>
    <td>currency</td>
    <td>{{salario | currency: 'EUR'}}</td>
</tr>
```
salida: 1.999,50 €
### currency
```html
<tr>
    <td>{{salario}}</td>
    <td>currency</td>
    <td>{{salario | currency: 'EUR': 'symbol': '.0-0'}}</td>
</tr>
```
salida: 1.001 €
### async
```html
<tr>
    <td>{{valorProsema}}</td>
    <td>async</td>
    <td>{{valorPromesa | async }}</td>
</tr>
```
salida: La función valorPromesa, entra en un setTimeOut e
imprime un string despues de un determinado tiempo.
### date
```html
<tr>
    <td>{{fecha}}</td>
    <td>date</td>
    <td>{{fecha | date }}</td>
</tr>
```
salida: 26 ago. 2020
### date
```html
<tr>
    <td>{{fecha}}</td>
    <td>date</td>
    <td>{{fecha | date: 'medium' }}</td>
</tr>
```
 salida: 26 ago. 2020 23:48:06
### date
```html
<tr>
    <td>{{fecha}}</td>
    <td>date</td>
    <td>{{fecha | date: 'short' }}</td>
</tr>
```
 salida: 26/8/20 23:48
### date
```html
<tr>
    <td>{{fecha}}</td>
    <td>date</td>
    <td>{{fecha | date: 'MMMM - dd' }}</td>
</tr>
```
salida: agosto - 26
### json
```html
<h3>JSON</h3>
        <div class="row mb-5">
            <div class="col">
                <pre>
                {{ soldado | json}}
              </pre>
            </div>
        </div>
```
salida: 
```json
{
  "nomnre": "ryan",
  "rango": "cabo",
  "edad": 25
}
```
### json
```html
<ul>
    <li *ngFor="let item of arreglo | slice:5:20">{{item}}</li>
    </ul>
```
salida: 
-6
-7
-8
-9
-10
