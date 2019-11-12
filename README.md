# ClubDisca
Proyecto info. 2019 para Club Discas 🐕, una organización protectora de animales destinada el bienestar del mejor amigo del hombre 🐶 y todo pequeño de cuatro patas que se le parezca 🐈.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Project structure

### Aclaraciones
- Datasource: se implementan mediante un servicio en un componente, sin embargo el comando `ng g s` no tiene la opcion --type para reescribir el tipo generado por lo que tendremos que generar un servicio, y cambiarlo manualmente:
  exaple.service.ts --> example.datasource.ts

<pre>
src:
├── app:
│   ├── common:
│   │   └── [ng g @angular/material:material-nav --name=common/menu --skip-tests] Menú de navegación (component):
│   │   
│   ├── [ng g s shared/services/contact --skip-tests] Shared (Modulo):
│   │   │  
│   │   └── ...
│   │   
│   ├── [ng g p shared/pipes/filter] Filter (Modulo):
│   │     Filter: filter para listas generadas con *ngFor
│   │
│   ├── [ng g m shared/pipes/pipe] Shared (Modulo):
│   │   │  
│   │   └── ...
│   │   
│   ├── [ng g m core] Core (Modulo):
│   │   │    Es muy parecido a un modulo helper o utils ya que
│   │   │  contiene servicios, componentes, etc. que se podrian
│   │   │  adaptar a otros proyectos pero los mismos estan
│   │   │  pensasdos sobre la logica de negocio.
│   │   └── ...
│   │   
│   ├── [ng g c auth --skip-tests] Login (component):
│   │   │   │ Contiene:
│   │   │   │    * signin
│   │   │   │    * signup
│   │   │   │
│   │   │   └── [ng g m auth --routing]
│   │   │
│   │   ├── [ng g c SignIn --skip-tests] SignIn (component):
│   │   │   │
│   │   │   └── [ng g m SignIn --routing]
│   │   │       └──[ng g c login/application-card/application]
│   │   │
│   │   └── [ng g c SignUp --skip-tests] SignIn (component):
│   │       │
│   │       └── [ng g m SignUp --routing]
│   │           └──[ng g c login/application-card/application]
│   │   
│   ├── [ng g c Profile --skip-tests] Profile (component):
│   │   │    .
│   │   ├── [ng g m Profile --routing]
│   │   │    .
│   │   ├── [ng g c profile/EditProfile --skip-tests] EditProfil (component)
│   │   │   │   
│   │   │   └── [ng g m profile/EditProfile --routing]
│   │   │
│   │   └── [ng g c profile/publications --skip-tests] EditProfil (component)
│   │       │   
│   │       └── [ng g m profile/publications --routing]
│   │   
│   ├── [ng g c Conversation --skip-tests] Conversation (component)
│   │   │    .
│   │   ├── [ng g m Conversation --routing]
│   │   │    .
│   │   └── ...
│   │
│   ├── [ng g c notifications --skip-tests] notifications (component):
│   │   │
│   │   ├── [ng g m notifications --routing]
│   │   │
│   │   └── ...
│   │
│   ├── [ng g c about --skip-tests] about (component):
│   │   │
│   │   ├── [ng g m about --routing]
│   │   └── ...
│   │
│   ├── [ng g c contact --skip-tests] contact (component):
│   │   │
│   │   ├── [ng g m contact --routing]
│   │   │
│   │   └── [ng g s contact/contact --skip-tests] ContactDataSource (datasource)
│   │
│   ├── [ng g c home --skip-tests] Home (component):
│   │   │    Muestra el sitio con inicio de sesión.
│   │   │    Contiene:
│   │   │       * Contar una historia ()
│   │   │       * historias
│   │   │   
│   │   ├── [ng g c home/PostStory --skip-tests]
│   │   │   │
│   │   │   └── [ng g m home/PostStory --routing]
│   │   │   
│   │   ├── [ng g c home/stories --skip-tests]
│   │   │   │
│   │   │   └── [ng g m home/Stories --routing]
│   │   │   
│   │   └── ...
│   │   
│   └── ...
│   
└── ...
<pre>
