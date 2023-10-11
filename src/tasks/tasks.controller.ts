import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksSerivce: TasksService) {}

  @Get()
  sayHello(): Task[] {
    return this.tasksSerivce.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task[] {
    // console.log(title, description);
    return this.tasksSerivce.createTask(createTaskDto);
  }
}
