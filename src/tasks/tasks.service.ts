import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  private myname: Task[] = [];

  getAllTasks(): Task[] {
    return this.myname;
  }
}
