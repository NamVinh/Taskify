import { Task } from './task';

export abstract class TaskRepository {
  abstract findById(id: string): Promise<Task | null>;
  abstract create(task: Task): Promise<void>;
  abstract update(task: Task): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findByUser(userId: string): Promise<Task[]>;
}
