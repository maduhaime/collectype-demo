import { Collection, FullFunctions } from 'collectype';
import { Pokemon } from '../models/Pokemon';

/**
 * Extended functions for Pokémon collections with domain-specific filtering capabilities.
 * Inherits all standard collection operations and adds Pokémon-specific business logic.
 */
export class PokemonFunctions extends FullFunctions<Pokemon> {
  constructor(items: Pokemon[]) {
    super(items);
  }

  

  /**
   * Filters Pokémon by their legendary status.
   *
   * @param flag - If true (default), returns only legendary Pokémon; if false, returns only non-legendary Pokémon.
   * @returns {this} The instance for chaining further operations.
   *
   * @example
   *   collection.fn.legendary().items; // all legendary Pokémon
   *   collection.fn.legendary(false).items; // all non-legendary Pokémon
   */
  legendary(flag: boolean = true): this {
    return this.booleanEquals('is_legendary', flag);
  }

  /**
   * Filters Pokémon to those with base_experience greater than 150.
   *
   * @returns {this} The instance for chaining further operations.
   *
   * @example
   *   collection.fn.experienced().items; // all Pokémon with base_experience > 150
   */
  experienced(): this {
    return this.numberGreaterThan('base_experience', 150);
  }
}

/**
 * Collection wrapper for Pokémon items with specialized PokemonFunctions.
 *
 * This class provides easy access to Pokémon-specific operations through the `fn` property,
 * including custom filters like `.legendary()` and `.experienced()`, in addition to all standard collection methods.
 *
 * Example usage (type inference for the functions class is automatic):
 *   const collection = new PokemonCollection(pokemons);
 *   const legendary = collection.fn.legendary();
 *   const experienced = collection.fn.experienced();
 */
export class PokemonCollection extends Collection<Pokemon, PokemonFunctions> {
  constructor(items: Pokemon[]) {
    super(items, PokemonFunctions);
  }
}
