import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksSerivce: TasksService) {}

  @Get()
  sayHello(): Task[] {
    return this.tasksSerivce.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task[] {
    console.log(title, description);
    return this.tasksSerivce.createTask(title, description);
  }
}
