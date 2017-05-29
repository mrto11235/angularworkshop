export class TaskService
{
  tasks: Array<Task> = [];
  completedtasks: Array<Task> = [];
  loading:boolean = false;

  public inject = ['$q'];

  constructor(private $q: ng.IQService)
  {
  }

  assignNextID()
  {
    let max = 0;
    for( let t of this.tasks)
    {
      if(t.id > max)
      {
        max = t.id;
      }
    }
    return max+1;
  }
  addTask(t: string)
  {
    let initialHttpRequest = this.getDummyPromise();
    initialHttpRequest.then((success: string) => {
      let task = new Task(t, 0, this.assignNextID(), false);
      this.tasks.push(task);
      this.loading = false;
    });
  }
  deleteTask(t: Task)
  {
    let initialHttpRequest = this.getDummyPromise();

    initialHttpRequest.then((success: string) => {
      this.tasks.splice(this.tasks.indexOf(t), 1);
      this.loading = false;
    });
  }
  deleteCompletedTask(t: Task)
  {
    let initialHttpRequest = this.getDummyPromise();

    initialHttpRequest.then((success: string) => {
      this.completedtasks.splice(this.completedtasks.indexOf(t), 1);
      this.loading = false;
    });
  }
  prioritizeTask(t: Task)
  {
    let initialHttpRequest = this.getDummyPromise();
    initialHttpRequest.then((success: string) => {
      let index = this.tasks.indexOf(t) - 1;
      if(index >= 0)
      {
        this.tasks.splice(this.tasks.indexOf(t), 1);
        this.tasks.splice(index, 0, t);
      }
      this.loading = false;
    });
  }
  toggleCompletion(t:Task)
  {
    let initialHttpRequest = this.getDummyPromise();

    initialHttpRequest.then((success: string) => {
      this.tasks.splice(this.tasks.indexOf(t), 1);
      this.completedtasks.push(t);
      this.loading = false;
    });
  }
  getDummyPromise(): ng.IPromise<string> {
    let defer = this.$q.defer();
    this.loading = true;
    setTimeout(function () {
        defer.resolve('Success');
    }, 1000);
    return defer.promise;
  }

}

export class Task
{
  constructor(public text: string, public status: number, public id: number, public edit: boolean)
  {
  }
}
