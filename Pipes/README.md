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
  valorProsema= new Promise<string> ((resolve)=>{
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
### lowercase
```html
<tr>
    <td>{{nombre}}</td>
    <td>lowecase</td>
    <td>{{nombre | lowercase}}</td>
</tr>
```
### slice
```html
<tr>
    <td>{{nombre}}</td>
    <td>slice:3</td>
     <td>{{nombre | slice: 3}}</td>
</tr>
```
### slice
```html
<tr>
    <td>{{nombre}}</td>
    <td>slice:3</td>
     <td>{{nombre | slice: 0: 3}}</td>
</tr>
```
### number
```html
<tr>
    <td>{{PI}}</td>
    <td>decimal/number</td>
    <td>{{PI | number}}</td>
</tr>
```
### number
```html
<tr>
    <td>{{PI}}</td>
    <td>decimal/number</td>
    <td>{{PI | number: '1.0-0'}}</td>
</tr>
```
### number
```html
<tr>
    <td>{{PI}}</td>
    <td>decimal/number</td>
    <td>{{PI | number: '.0-2'}}</td>
</tr>
```
### percent
```html
<tr>
    <td>{{valor}}</td>
    <td>percent</td>
    <td>{{valor | percent}}</td>
</tr>
```
### percent
```html
<tr>
    <td>{{valor}}</td>
    <td>percent</td>
    <td>{{valor | percent: '2.2-2'}}</td>
</tr>
```
### percent
```html
<tr>
    <td>{{salario}}</td>
    <td>currency</td>
    <td>{{salario | currency}}</td>
</tr>
```
### percent
```html
<tr>
    <td>{{salario}}</td>
    <td>currency</td>
    <td>{{salario | currency: 'EUR'}}</td>
</tr>
```
### percent
```html
<tr>
    <td>{{salario}}</td>
    <td>currency</td>
    <td>{{salario | currency: 'EUR': 'symbol': '.0-0'}}</td>
</tr>
```
### async
```html
<tr>
    <td>{{valorProsema}}</td>
    <td>async</td>
    <td>{{valorProsema | async }}</td>
</tr>
```
### date
```html
<tr>
    <td>{{fecha}}</td>
    <td>date</td>
    <td>{{fecha | date }}</td>
</tr>
```
### date
```html
<tr>
    <td>{{fecha}}</td>
    <td>date</td>
    <td>{{fecha | date: 'medium' }}</td>
</tr>
```
### date
```html
<tr>
    <td>{{fecha}}</td>
    <td>date</td>
    <td>{{fecha | date: 'short' }}</td>
</tr>
```
### date
```html
<tr>
    <td>{{fecha}}</td>
    <td>date</td>
    <td>{{fecha | date: 'MMMM - dd' }}</td>
</tr>
```
### date
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
