import { Task as TaskModel } from "../../../../prisma/generated";
import {  Task, TaskRepository } from "../../../domain";
import { PrismaService } from "../abstractions/prisma.service";

export class PrismaTaskRepository implements TaskRepository {
  constructor(private readonly prisma: PrismaService) { 
  }

  async findById(id: string): Promise<Task | null> {
    const record = await this.prisma.task.findUnique({ where: { id } });
    return record ? this.toDomain(record) : null;
  }

  async create(task: Task): Promise<void> { 
 try {
      await this.prisma.$transaction(async (tx) => {
        const result = await this.prisma.task.create({
          data: this.toPersistence(task),
        });

        throw Error("Herr");

        // console.log("result", result);
        // const existing = await tx.task.findFirst();

        // console.log('hahahaaaaaaa', existing);
        // if (!existing) {
        //   throw new Error(`Task with ID ${task.id} not found`);
        // }

        // // Update đầu tiên
        // await tx.task.update({
        //   where: { id: existing.id },
        //   data: { title: 'update' },
        // });
      });
    } catch (err) {
      console.error('Failed to update task:', err);
      throw err;
    }
  }

  async update(task: Task): Promise<void> {
    await this.prisma.task.update({
      where: { id: task.id.toString() },
      data: this.toPersistence(task),
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.task.delete({ where: { id } });
  }

  async findByUser(userId: string): Promise<Task[]> {
    const records = await this.prisma.task.findMany({ where: { userId } });
    return records.map(this.toDomain);
  }

  private toDomain(record: any): Task {
    return new Task({
      id: new record.id,
      userId: record.userId,
      groupTaskId: record.groupTaskId,
      title: record.title,
      description: record.description, 
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }

  private toPersistence(task: Task): TaskModel {
    return {
      id: task.id.toString(),
      userId: task.userId,
      groupTaskId: task.groupTaskId,
      title: task.title,
      description: task.description,
      status: task.status.toString(),
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    };
  }
}