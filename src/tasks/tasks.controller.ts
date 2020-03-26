import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe
}                               from '@nestjs/common';
import { CreateTaskDto }        from "./dto/create.task.dto";
import { TaskFilterDto }        from "./dto/task.filter.dto";
import { TaskStatusValidation } from "./pipes/task.status.validation";
import { Task }                 from "./task.entity";
import { TaskStatus }           from "./task.status";
import { TasksService }         from "./tasks.service";

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) {
  }

  // @Get()
  // getTasks(@Query(ValidationPipe) taskFilterDto: TaskFilterDto): Task[] {
  //   if (Object.keys(taskFilterDto).length) {
  //     return this.tasksService.getTasks(taskFilterDto);
  //   } else {
  //     return this.tasksService.getAllTasks()
  //   }
  // }
  //
  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id)
  }

  //
  //
  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.createTask(createTaskDto)
  // }
  //
  //
  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string): void {
  //   return this.tasksService.deleteTaskById(id);
  // }
  //
  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusValidation) status: TaskStatus,
  // ): Task {
  //   return this.tasksService.updateTaskStatus(id, status)
  // }

}
