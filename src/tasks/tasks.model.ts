/* eslint-disable prettier/prettier */
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

enum TaskStatus {
  OPEN = 'OPEN',
  ON_PROCESS = 'ON_PROCESS',
  DONE = 'DONE',
}
