import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from './create-task.command';
import { Task, TaskRepository } from '../../../domain';
import { ObjectId } from 'bson';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(command: CreateTaskCommand) { 
    const { userId, groupTaskId, title, description } = command;
    const task = new Task({
      id: new ObjectId().toString(),
      userId,
      groupTaskId,
      title,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
     
    await this.taskRepository.create(task);
  }
}
