export class Day4Controller
{
  data_success = "";
  data_err = "";
  cars = "";
  slots = "";
  static inject = ['$http'];

  constructor(private $http: ng.IHttpService)
  {

  }

  getHttp()
  {
      this.$http.get('http://smartninja.betoo.si/api/CMW/cars')
          .then((success: any) => {
                  this.cars = success.data;
                  return this.$http.get('http://smartninja.betoo.si/api/CMW/timeslots');
              }, (error: any) => {
                  console.log(error);
              }
          )
          .then((success: any) => {
                  this.slots = success.data;
              }, (error: any) => {
                  console.log(error);
              }
          );
  }
  postHttp(id:string, email:string)
  {
    this.data_err = "";
    this.data_success = "";
    this.$http.post('http://smartninja.betoo.si/api/CMW/reservations', {"timeslotId": id, "email":email})
        .then((success: any) => {
                this.data_success = success;
            }, (error: any) => {
                this.data_err = error;
            }
        );
  }
  fireHttp()
  {
    this.getHttp();
  }
  bookTimeslot(id:string, email:string)
  {
    this.postHttp(id, email);
  }
}
