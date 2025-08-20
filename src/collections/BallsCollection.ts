import { BaseCollection, FullFunctions } from 'collectype';
import { booleanFilter } from 'collectype/utils/filters';

import { Ball } from '../models/Ball';

/**
 * Extended functions for Ball collections with domain-specific filtering capabilities.
 * Inherits all standard collection operations and adds Ball-specific business logic.
 */
export class BallFunctions extends FullFunctions<Ball> {
  constructor(items: Ball[]) {
    super(items);
  }

  /**
   * Filters balls by their inflatable property.
   * Useful for finding balls that can be inflated/deflated for storage or play.
   * @param flag - Whether to include inflatable (true) or non-inflatable (false) balls.
   * @returns {this} The instance for chaining.
   */
  inflatable(flag: boolean = true): this {
    this._items = booleanFilter(this._items, 'isInflatable', 'equals', flag);
    return this;
  }
}

/**
 * Collection wrapper for Ball items with specialized BallFunctions.
 * Provides easy access to Ball-specific operations through the fn property.
 */
export class BallCollection extends BaseCollection<Ball, typeof BallFunctions> {
  constructor(items: Ball[]) {
    super(items, BallFunctions);
  }
}
