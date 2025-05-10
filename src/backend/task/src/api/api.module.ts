import { Module, Provider } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure';
import { CqrsModule } from '@nestjs/cqrs';
import { TaskController } from './controllers/tasks/task.controller';
import { ApplicationModule } from '../application/application.module';
import { withTaskHandlerProvider } from '../application/tasks/provider';

const withApplicationProvider: Provider[] = [
  ...withTaskHandlerProvider
];

@Module({
  imports: [ApplicationModule, InfrastructureModule, CqrsModule.forRoot()],
  controllers: [TaskController],
  providers: [...withApplicationProvider],
})
export class ApiModule {}
