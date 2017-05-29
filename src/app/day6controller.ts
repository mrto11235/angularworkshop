export class Day6Controller
{
  data = "";
  moreThan = false;
  lengthTH = 10;

  static inject = [];

  constructor()
  {

  }

  count(){
    if(this.data.length > this.lengthTH)
    {
      this.moreThan = true;
    }
    else
    {
      this.moreThan = false;
    }
  }
}
export class BasketballController
{
  points = 0;

  static inject = [];
  constructor()
  {

  }

  addPoints(i:number)
  {
    this.points+=i;
  }
}
export class Day6MasterController
{
  teamHome: string = "Olimpija";
  hColor: string = "green";

  teamGuests: string = "Rogaska";
  gColor: string = "blue";

  static inject = [];
  constructor()
  {}
}
