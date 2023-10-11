import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksSerivce: TasksService) {}

  @Get()
  sayHello(): Task[] {
    return this.tasksSerivce.getAllTasks();
  }
}
