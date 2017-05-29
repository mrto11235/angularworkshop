import {IDirective} from 'angular';
import {Day6Controller} from './day6controller';

export class TestDirective implements IDirective
{

  templateUrl = 'countcharstemplate.html';

  controller = 'Day6Controller';
  controllerAs = '$ctrl';
  //bindToController  = true;
  constructor()
  {

  }

  static factory(): ng.IDirectiveFactory
  {
      const directive = () => new TestDirective();

      return directive;
  }

}

export class BasketballDirective implements IDirective
{

  templateUrl = 'basketballtemplate.html';

  scope = {
    name: '=name',
    clr: '=clr'
  };

  controller = 'BasketballController';
  controllerAs = '$ctrl';
  bindToController  = true;
  constructor()
  {

  }

  static factory(): ng.IDirectiveFactory
  {
      const directive = () => new BasketballDirective();

      return directive;
  }

}


/*
2 directives
1st count the number of characters inside of values <input ng-model="data"
  display green checkmark if it is above 10 chars and red if bellow

2nd have a scoring board for a basketball game
  home : guests, 3 buttons for 1point,2point,3points adding to the team
*/
