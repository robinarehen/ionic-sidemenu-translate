# Descripción
Proyecto en el cual se implementa el componente SIDE-MENU de Ionic y la traducción de idiomas.

# Instalaciones

Toda la información en la [Documentación oficial](https://www.npmjs.com/package/@ngx-translate/core), en este apartado se agregan los puntos más relevantes utilizado en este proyecto.

1. Se realiza la instalación del paquete translate.

```
npm install @ngx-translate/core --save

npm install @ngx-translate/http-loader --save
```
2. Se agrega la configuración al `app.module.ts`
```ts
...

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
...
imports: [
  ...
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: httpLoaderFactory,
      deps: [HttpClient]
    }
  })
],
...
```
3. Se agrega la configuración de la selección del idioma inicial en `app.component.ts`

4. Se agregan los idiomas en la ruta
```
/src/assets/I18n
```

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
