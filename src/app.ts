import * as angular from 'angular';
import 'angular-ui-router';
import {MainController} from './app/maincontroller';
import {FormController} from './app/formcontroller';
import {Day4Controller} from './app/day4controller';
import {Day5Controller} from './app/day5controller';
import {Day5ControllerFix} from './app/day5controllerfix';
import {Day6Controller, BasketballController, Day6MasterController} from './app/day6controller';
import {TaskService} from './app/taskservice';
import {TaskServiceFix} from './app/taskservicefix';
import {TestDirective, BasketballDirective} from './app/directives';
import {Day9ControllerStateParams, Day9Controller} from './app/day9controller';

const myApp = angular.module('comtrade', ['ui.router'])
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
  .directive("basketballDirective", BasketballDirective.factory())

  .controller("Day9Controller", Day9Controller)
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        $stateProvider.state('description',
        {
          url: '/description/:parameter',
          template: '<p>Description: {{ vm.parameter }}</p>',
          controller: Day9Controller,
          controllerAs: 'vm'
        });
    }]);
