import * as angular from 'angular';
import {MainController} from './app/maincontroller';
import {FormController} from './app/formcontroller';
import {Day4Controller} from './app/day4controller';
import {Day5Controller} from './app/day5controller';
import {Day5ControllerFix} from './app/day5controllerfix';
import {Day6Controller, BasketballController, Day6MasterController} from './app/day6controller';
import {TaskService} from './app/taskservice';
import {TaskServiceFix} from './app/taskservicefix';
import {TestDirective, BasketballDirective} from './app/directives';

const myApp = angular.module('comtrade', [])
  .controller("MainController", MainController)
  .controller("FormController", FormController)
  .controller("Day4Controller", Day4Controller)
  .controller("Day5Controller", Day5Controller)
  .controller("Day5ControllerFix", Day5ControllerFix)
  .service("TaskService", TaskService)
  .service("TaskServiceFix", TaskServiceFix)

  .controller("Day6MasterController", Day6MasterController)
  .controller("Day6Controller", Day6Controller)
  .directive("testDirective", TestDirective.factory())

  .controller("BasketballController", BasketballController)
  .directive("basketballDirective", BasketballDirective.factory());



  //FizzBuzz
  /*let input = prompt("Number:");
  for(let i=1; i<=Number(input); i++)
  {
    let output = "";
    if(i%3==0)
    {
      output+="fizz";
    }
    if(i%5==0)
    {
      output+="buzz";
    }
    if(i%5>0 && i%3>0)
    {
      console.log(i);
    }
    else
    {
        console.log(output);
    }

  }

  //Guess the Number
  let num = Math.floor(Math.random() * 10) + 1;
  let ou = "";
  while(true)
  {
    let inp = prompt(ou + "\nGuess:");
    if(Number(inp) > num)
    {
      ou = "Aim lower";
    }
    else if(Number(inp) < num)
    {
      ou = "Aim Higher";
    }
    else
    {
      console.log("Congratzzz!!!");
      break;
    }
  }**/
