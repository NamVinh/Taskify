import { Command } from '@nestjs/cqrs';

export class CreateTaskCommand extends Command<void> {
  constructor(
    public readonly userId: string,
    public readonly groupTaskId: string,
    public readonly title: string,
    public readonly description: string
  ) {
    super();
  }
}
