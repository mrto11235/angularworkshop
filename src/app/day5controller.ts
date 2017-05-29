import {TaskService, Task} from './taskservice';

export class Day5Controller
{
  static inject = ['TaskService'];

  constructor(public TaskService: TaskService)
  {
    this.TaskService = TaskService;
  }
  addTask(t: string)
  {
    this.TaskService.addTask(t);
  }
  deleteTask(t: Task)
  {
    this.TaskService.deleteTask(t);
  }
  deleteCompletedTask(t: Task)
  {
    this.TaskService.deleteCompletedTask(t);
  }
  prioritizeTask(t: Task)
  {
    this.TaskService.prioritizeTask(t);
  }
  toggleCompletion(t:Task)
  {
    this.TaskService.toggleCompletion(t);
  }

}
