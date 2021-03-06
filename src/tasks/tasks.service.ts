import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository }              from "@nestjs/typeorm";
import { CreateTaskDto }                 from "./dto/create.task.dto";
import { TaskFilterDto }                 from "./dto/task.filter.dto";
import { Task }                          from "./task.entity";
import { TaskRepository }                from "./task.repository";
import { TaskStatus }                    from "./task.status";

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {
  }

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  //
  // getTasks(taskFilterDto: TaskFilterDto): Task[] {
  //   const { status, search } = taskFilterDto
  //
  //   let tasks = this.tasks
  //
  //   if (status) {
  //     tasks = tasks.filter(task => task.status === status)
  //   }
  //
  //   if (search) {
  //     tasks = tasks.filter(task => task.title.includes(search) || task.description.includes(search))
  //   }
  //
  //   return tasks
  // }
  //
  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id)

    if (!found) {
      throw new NotFoundException(`Task not found, id: ${id} `)
    }

    return found
  }

  //
  //
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto
  //
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN
  //   }
  //
  //   this.tasks.push(task)
  //   return task
  // }
  //
  // deleteTaskById(id: string): void {
  //   const found = this.getTaskById(id)
  //   this.tasks = this.tasks.filter(task => task.id !== found.id)
  // }
  //
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status
  //   return task
  // }

}
