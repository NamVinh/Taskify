import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure';
import { CqrsModule } from '@nestjs/cqrs';
import { TaskController } from './controllers/tasks/task.controller';
import { ApplicationModule } from '../application/application.module';
import { withTaskProvider } from '../application/tasks/provider';
import { withRepository } from '../infrastructure/persistence';

@Module({
  imports: [ApplicationModule, InfrastructureModule, CqrsModule.forRoot()],
  controllers: [TaskController],
  providers: [
    ...withTaskProvider,
    ...withRepository
  ],
})
export class ApiModule {}
