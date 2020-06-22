# BackbaseWeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Application first page

![image](https://user-images.githubusercontent.com/31056784/85273774-57321380-b47e-11ea-97c0-5a2f8ead05e6.png)

On clicking of the cities displayed. you come to next view


![image](https://user-images.githubusercontent.com/31056784/85273641-2520b180-b47e-11ea-9b6b-2d208d02b2f8.png)

Current code coverage is as 
![image](https://user-images.githubusercontent.com/31056784/85273557-09b5a680-b47e-11ea-8794-2f7dd7abc0df.png)

Some points regarding the application:

<li>The Container components are Home and Details Components </li>
<li>So the data flow from top to bottom.</li> 
<li>Using the API from weather app </li>
<li>For forecast it fetches the data for next 5 days every 3 hour</li>
<li>Responsiveness </li>


Some points which can be improved:

1. Based on the API types can be more specific.
2. The first 5 cities are hard coded. which can be moved to API.
3. Search component can use typeahead instead of searching full string.
4. Accessibility to be added.
5. BEM to be followed in case of css





