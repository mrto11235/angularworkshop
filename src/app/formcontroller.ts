export class FormController
{
  modules: Module[] = [new Module("Core", ["Jerry", "Martin", "Junior", "Mihajlo"]),
                    new Module("GUI", ["Jan"]),
                    new Module("CS", ["Antal", "Jerry", "Martin", "Junior", "Mihajlo"]),
                    new Module("JCE", ["Jan", "Gagac"]),
                    new Module("License", ["Junior", "Dusan", "Davor"]),
                    new Module("DA", ["Besti"]),
                    new Module("MA", ["Boris","Joze","Frenk","Drago"])];
  severities  = [{"name":"Urgent"},{"name":"High"},{"name":"Medium"},{"name":"Low"}];
  first_click: boolean = false;
  report: string = "";

  firstClicked(ticketOpener)
  {
    if(!this.first_click && !ticketOpener.$valid)
    {
      this.first_click = true;
    }
    else
    {
      this.report = ticketOpener;
    }
  }
}
class Module
{
  constructor(public name: string, public owners: string[])
  {}
}
