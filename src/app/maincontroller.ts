export class MainController
{
  parameter: string = '';
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
  addTask(t: string, tdesc: string)
  {
    let task = new Task(t, 0, this.assignNextID(), false, tdesc, false);
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
  hideDescriptionsButOne(t:Task)
  {
    if(t.show_description)
    {
      for(let task of this.tasks)
      {
        task.show_description = false;
      }
    }
    else
    {
      for(let task of this.tasks)
      {
        task.show_description = false;
      }
      t.show_description = true;
    }
  }
}
class Task
{
  constructor(public text: string, public status: number, public id: number, public edit: boolean, public description: string, public show_description: boolean) {
  }
}
