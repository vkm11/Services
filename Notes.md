## How to create servicesL:-
* create one folder (service) and inside service folder we can create services
* ex: Service(folder)
* userdata.component.ts
- ng g service service/userdata

## component installing:-
- ng g c footer



## PRINCIPLES:-
-Do not repeat yourself(DRY)
-single Responsibility principle


## SERVICE  v-17:-

	A class with a specific purpose.
	
	1) Share data
	2) Implement application logic
	3) External Interaction
	
	Naming convention-.service.ts
  
 
## Dependency Injection v-18:-
1.Code without DI-drawbacks 
2.DI as a design pattern 
3.DI as a framework

#-1 Code without DI-drawbacks :- 3 class- 1) class Engine{
						constructor(){}
						}
						class Tires{
						    constructor(){}
						}
					2) class Tires
					3) class Car{
						engine;
						tires;
						constructor()
						{
							this.engine = new Engine();
							this.tires = new Tires();
						}
					}

#-2 DI as a design pattern : -
	
- DI is a coding pattern in which a class receives its dependencies from external sources rather than creating them itself. 

DI as a design pattern contd.
	
	*Ex-
	var myEngine = new Engine();
	var myTires = new Tires();
	var myCar = new Car(myEngine, myTires);
	
	var myEngine = new Engine(parameter);
	var myTires = new Tires();
	var myCar = new Car(myEngine, myTires);
	
	var myEngine = new Engine(parameter);
	var myTires = new Tires(parameter);
	var myCar = new Car(myEngine, myTires);
	
	*Ex-
	var oldEngine = new Engine(oldparameter);
	var oldTires = new Tires(oldparameter);
	var oldCar = new Car(oldEngine, oldTires);
	
	var newEngine = new Engine(newparameter);
	var newTires = new Tires(newparameter);
	var newCar = new Car(newEngine, newTires);
	
	*Ex-
	var myEngine = new Engine();
	var myTires = new Tires();
	var depA = new dependency();
	var depB = new dependency();
	var depZ = new dependency();
	var myCar = new Car(myEngine, myTires, depA, depB, depZ);
	
	
	var myEngine = new Engine();
	var myTires = new Tires();
	var depA = new dependency();
	var depB = new dependency();
	var depZ = new dependency(depAB);
	var myCar = new Car(myEngine, myTires, depA, depB, depZ);
	
	
	
#-3 DI as a framework:-
	
	Injector
	
	Engine			ServiceA
	Tires			ServiceB
	DepA			ServiceC
	DepB			..
	..			..
	..			..
	..			..
	DepZ			ServiceZ
	
	
	CAR			EmpList
	
#DI as a framework contd

1)Define the EmployeeService class
2)Register with Injector
3)Declare as dependency in Emplist and EmpDetail


			EmployeeService	          Injector
				|
		1.EmpList		2.EmpDetail
 
 

# Services

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
