import { Module } from '@nestjs/common';
import { PrismaService } from './persistence/abstractions/prisma.service';

@Module({
  imports: [],
  exports: [PrismaService],
  providers: [PrismaService],
})
export class InfrastructureModule {}
