import { Module } from '@nestjs/common';
import { PrismaService } from './persistence/abstractions/prisma.service';
import { withRepository } from './persistence';

@Module({
  imports: [],
  exports: [PrismaService, ...withRepository],
  providers: [PrismaService, ...withRepository],
})
export class InfrastructureModule {}
