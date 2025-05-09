import { Entity } from '../../building-block/domain';
import { Identity } from '../../building-block/domain/identity';
import { TaskStatus } from './task-status';

export class Task extends Entity {
  private _userId: string;
  private _groupTaskId: string;
  private _title: string;
  private _description: string | null;
  private _status: TaskStatus;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(props: {
    id: Identity;
    userId: string;
    groupTaskId: string;
    title: string;
    description: string; 
    createdAt: Date;
    updatedAt: Date;
  }) {
    super(props.id);
    this._userId = props.userId;
    this._groupTaskId = props.groupTaskId;
    this._title = props.title;
    this._description = props.description;
    this._status = TaskStatus.Open;
    this._createdAt = props.createdAt;
    this._updatedAt = props.updatedAt;
  }
 
  get userId(): string {
    return this._userId;
  }

  get groupTaskId(): string {
    return this._groupTaskId;
  }

  get title(): string {
    return this._title;
  }

  get description(): string | null {
    return this._description;
  }

  get status(): TaskStatus {
    return this._status;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  updateStatus(status: TaskStatus): void {
    this._status = status;
    this._updatedAt = new Date();
  }

  updateDescription(description: string): void {
    this._description = description;
    this._updatedAt = new Date();
  }
}
