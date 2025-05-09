import { Provider } from '@nestjs/common';
import { TaskRepository } from '../../domain';
import { PrismaTaskRepository } from './repositories/task.repository.prisma';
import { PrismaService } from './abstractions/prisma.service';

export const withRepository: Provider[] = [
  {
    provide: TaskRepository,
    useFactory: (prisma: PrismaService) => new PrismaTaskRepository(prisma),
    inject: [PrismaService],
  },
];