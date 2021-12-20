# Descripción
Proyecto en el cual se implementa el componente SIDE-MENU de Ionic y la traducción de idiomas.

# Instalaciones

1. Se realiza la instalación del paquete translate, toda la información en este [link](https://www.npmjs.com/package/@ngx-translate/core)

```
npm install @ngx-translate/core --save

npm install @ngx-translate/http-loader --save
```
> Siguiendo el paso a paso del link se puede completar el ejercicio sin problemas.

# Configuraciones
1. Habilitar la lectura de archivos `JSON` guardados en la carpeta `assets`.

> En la carpeta raiz abrir el archivo de nombre `tsconfig.json` y agregar los siguientes atributos a la propiedad `compilerOptions`. <br/>
**NOTA:** Solo agregar los nuevos atributos, no eliminar los atributos que ya existen.

```json
  "compilerOptions": {
    "...":"...",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
```

> Ahora solo queda abrir el archivo donde se quiere leer el archivo `JSON` y agregar el importe de la siguiente forma.

```js
import configData from '../../assets/data/config-data.json';
```
> Al utilizar el importe `configData` notaremos que nos reconoce todas las propiedades y los atributos del `JSON`
