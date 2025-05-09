import { Identity } from "./identity";

export abstract class Entity<TId extends Identity = Identity> {
  readonly id: TId;

  protected constructor(id: TId) {
    this.id = id;
  }
}
