import {TaskServiceFix, Task} from './taskservicefix';

export class Day5ControllerFix
{
  static inject = ['TaskServiceFix'];
  loading:boolean = false;
  constructor(public TaskServiceFix: TaskServiceFix)
  {
    this.TaskServiceFix = TaskServiceFix;
  }
  addTask(t: string)
  {
    this.loading = true;
    let initialHttpRequest = this.TaskServiceFix.getDummyPromise();
    initialHttpRequest.then((success: string) => {
      this.TaskServiceFix.addTask(t);
      this.loading = false;
    });
  }
  deleteTask(t: Task)
  {
    this.loading = true;
    let initialHttpRequest = this.TaskServiceFix.getDummyPromise();
    initialHttpRequest.then((success: string) => {
      this.TaskServiceFix.deleteTask(t);
      this.loading = false;
    });
  }
  deleteCompletedTask(t: Task)
  {
    this.loading = true;
    let initialHttpRequest = this.TaskServiceFix.getDummyPromise();
    initialHttpRequest.then((success: string) => {
      this.TaskServiceFix.deleteCompletedTask(t);
      this.loading = false;
    });
  }
  prioritizeTask(t: Task)
  {
    this.loading = true;
    let initialHttpRequest = this.TaskServiceFix.getDummyPromise();
    initialHttpRequest.then((success: string) => {
      this.TaskServiceFix.prioritizeTask(t);
      this.loading = false;
    });
  }
  toggleCompletion(t:Task)
  {
    this.loading = true;
    let initialHttpRequest = this.TaskServiceFix.getDummyPromise();
    initialHttpRequest.then((success: string) => {
      this.TaskServiceFix.toggleCompletion(t);
      this.loading = false;
    });
  }

}
