import { BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus }                         from "../task.model";

export class TaskStatusValidation implements PipeTransform {

  readonly allowedStatus = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ]

  transform(value: any): any {
    value = value.toUpperCase()

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status.`)
    }

    return value
  }

  private isStatusValid(status: any): boolean {
    return this.allowedStatus.includes(status);
  }
}
