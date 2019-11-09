# Trewsenger

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

<pre>
src:
├── app:
│   ├── [ng g m shared] Shared (Modulo):
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
│   ├── [ng g c SignIn --skip-tests] SignIn (component):
│   │   │
│   │   └── [ng g m SignIn --routing]
│   │       └──[ng g c login/application-card/application]
│   │
│   ├── [ng g c SignUp --skip-tests] SignIn (component):
│   │   │
│   │   └── [ng g m SignUp --routing]
│   │       └──[ng g c login/application-card/application]
│   │   
│   ├── [ng g c Profile --skip-tests] Profile (component):
│   │   │    .
│   │   ├── [ng g m Profile --routing]
│   │   │    .
│   │   └── ...
│   │
│   │   
│   ├── [ng g c Conversation --skip-tests] Conversation (component):
│   │   │    .
│   │   ├── [ng g m Conversation --routing]
│   │   │    .
│   │   └── ...
│   │
│   ├── [ng g c home --skip-tests] Home (component):
│   │   │    Muestra el sitio sin inicio de sesión.
│   │   │    Contiene:
│   │   │       * signin
│   │   │       * signup
│   │   │
│   │   ├── [ng g m home --routing]
│   │   │
│   │   └── ...
│   │   
│   └── ...
│   
└── ...
<pre>
