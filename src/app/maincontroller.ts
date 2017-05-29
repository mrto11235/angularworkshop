export class MainController
{
  foo: string = 'Hello world!';
  static $inject = [];

  tasks: Array<Task> = [];
  completedtasks: Array<Task> = [];
  constructor()
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
    let task = new Task(t, 0, this.assignNextID(), false);
    this.tasks.push(task);
  }
  deleteTask(t: Task)
  {
    this.tasks.splice(this.tasks.indexOf(t), 1);
  }
  deleteCompletedTask(t: Task)
  {
    this.completedtasks.splice(this.completedtasks.indexOf(t), 1);
  }
  prioritizeTask(t: Task)
  {
    let index = this.tasks.indexOf(t) - 1;

    if(index >= 0)
    {
      this.deleteTask(t);
      this.tasks.splice(index, 0, t);
    }
  }
  toggleCompletion(t:Task)
  {
    this.deleteTask(t);
    this.completedtasks.push(t);
  }
}
class Task
{
  constructor(public text: string, public status: number, public id: number, public edit: boolean) {
  }
}
