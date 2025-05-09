import { Controller, Post, Body } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../../../application';

@Controller('tasks')
export class TaskController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createTask(@Body() taskData: any) {
    const { userId, groupTaskId, title, description } = taskData; 
    const command = new CreateTaskCommand(
      userId,
      groupTaskId,
      title,
      description, 
    );
 
    await this.commandBus.execute(command);
  }
}
