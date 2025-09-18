import { Collection } from "collectype";
import {
  PokemonCollection,
  PokemonFunctions,
} from "./collections/PokemonCollection";
import { pokemons } from "./data/pokemons";

import { output } from "./utils/output";

// Create a new collection of Pokémon using the custom PokemonCollection wrapper.
const collection = new PokemonCollection(pokemons);

// --- Basic sorting ---
// Sort all Pokémon by base_experience in descending order
const sorted = collection.fn.sort("base_experience", "desc");
output(
  "logger",
  "sorted:",
  sorted.items.map((p) => p.name)
);
// Output: ['mewtwo', 'charizard', 'gengar', 'snorlax', 'lapras', 'pikachu', 'jigglypuff', 'bulbasaur', 'squirtle', 'charmander']

// --- Manual predicate filtering ---
// Filter Pokémon whose types include 'fire'
const onlyFire = collection.fn.where((p: (typeof pokemons)[number]) =>
  p.types.includes("fire")
);
output(
  "logger",
  "onlyFire:",
  onlyFire.items.map((p) => p.name)
);
// Output: ['charmander', 'charizard']

// --- Custom domain method ---
// Use the custom 'legendary' method to filter only legendary Pokémon
const legendary = collection.fn.legendary();
output(
  "logger",
  "legendary:",
  legendary.items.map((p) => p.name)
);
// Output: ['mewtwo']

// --- Chaining custom and built-in methods ---
// Filter non-legendary Pokémon, then sort by base_experience ascending
const nonLegendarySorted = collection.fn
  .legendary(false)
  .sort("base_experience", "asc");
output(
  "logger",
  "nonLegendarySorted:",
  nonLegendarySorted.items.map((p) => p.name)
);
// Output: ['charmander', 'squirtle', 'bulbasaur', 'jigglypuff', 'pikachu', 'lapras', 'snorlax', 'gengar', 'charizard']

// --- Advanced chaining ---
// Filter non-legendary Pokémon of type 'fire', then sort by experience descending
const nonLegendaryFire = collection.fn
  .legendary(false)
  .where((p: (typeof pokemons)[number]) => p.types.includes("fire"))
  .sort("base_experience", "desc");
output(
  "logger",
  "nonLegendaryFire:",
  nonLegendaryFire.items.map((p) => p.name)
);
// Output: ['charizard', 'charmander']

// --- Built-in string filter ---
// Filter Pokémon whose name starts with 'ch'
const startsWithCh = collection.fn.stringStartsWith("name", "ch");
output(
  "logger",
  "startsWithCh:",
  startsWithCh.items.map((p) => p.name)
);
// Output: ['charmander', 'charizard']

// --- Complex multi-step chain ---
// Filter non-legendary Pokémon, of type 'water', with experience > 100, sorted by name
const complex = collection.fn
  .legendary(false)
  .where((p: (typeof pokemons)[number]) => p.types.includes("water"))
  .where((p: (typeof pokemons)[number]) => p.base_experience > 100)
  .sort("name");
output(
  "logger",
  "complex:",
  complex.items.map((p) => p.name)
);
// Output: ['lapras']

// --- FullFunctions advanced filter examples ---

// 1. booleanEquals: Filter items where a boolean field is true
const isLegendary = collection.fn.booleanEquals("is_legendary", true);
output(
  "logger",
  "isLegendary:",
  isLegendary.items.map((p) => p.name)
);
// Output: ['mewtwo']

// 2. booleanNotEquals: Filter items where a boolean field is false
const nonLegendary = collection.fn.booleanNotEquals("is_legendary", true);
output(
  "logger",
  "nonLegendary:",
  nonLegendary.items.map((p) => p.name)
);
// Output: ['charmander', 'squirtle', 'bulbasaur', 'jigglypuff', 'pikachu', 'lapras', 'snorlax', 'gengar', 'charizard']

// 3. stringEquals: Filter items where a string field equals a value
const namedPikachu = collection.fn.stringEquals("name", "pikachu");
output(
  "logger",
  "namedPikachu:",
  namedPikachu.items.map((p) => p.name)
);
// Output: ['pikachu']

// 4. stringIncludes: Filter items where a string field includes a substring
const includesChar = collection.fn.stringIncludes("name", "char");
output(
  "logger",
  "includesChar:",
  includesChar.items.map((p) => p.name)
);
// Output: ['charmander', 'charizard']

// 5. stringStartsWith: Filter items where a string field starts with a substring
const startsWithPi = collection.fn.stringStartsWith("name", "pi");
output(
  "logger",
  "startsWithPi:",
  startsWithPi.items.map((p) => p.name)
);
// Output: ['pikachu']

// 6. numberGreaterThan: Filter items where a number field is greater than a value
const highExp = collection.fn.numberGreaterThan("base_experience", 200);
output(
  "logger",
  "highExp:",
  highExp.items.map((p) => p.name)
);
// Output: ['mewtwo', 'charizard', 'gengar']

// 7. numberBetween: Filter items where a number field is within a range
const midExp = collection.fn.numberBetween("base_experience", 100, 200);
output(
  "logger",
  "midExp:",
  midExp.items.map((p) => p.name)
);
// Output: ['snorlax', 'lapras', 'pikachu']

// 8. pipe: Use a string expression to chain multiple filters
const piped = collection.fn.pipe(
  "booleanEquals('is_legendary', false) | stringIncludes('name', 'a') | numberGreaterThan('base_experience', 100)"
);
output(
  "logger",
  "piped:",
  piped.items.map((p) => p.name)
);
// Output: ['charizard', 'gengar', 'snorlax', 'lapras', 'pikachu']

// 9. stringNotEquals: Filter items where a string field does not equal a value
const notPikachu = collection.fn.stringNotEquals("name", "pikachu");
output(
  "logger",
  "notPikachu:",
  notPikachu.items.map((p) => p.name)
);
// Output: ['mewtwo', 'charizard', 'gengar', 'snorlax', 'lapras', 'jigglypuff', 'bulbasaur', 'squirtle', 'charmander']

// 10. stringExcludes: Filter items where a string field does not include a substring
const excludesChar = collection.fn.stringExcludes("name", "char");
output(
  "logger",
  "excludesChar:",
  excludesChar.items.map((p) => p.name)
);
// Output: ['mewtwo', 'gengar', 'snorlax', 'lapras', 'pikachu', 'jigglypuff', 'bulbasaur', 'squirtle']

const pokemonCollection = new Collection(pokemons, PokemonFunctions);

pokemonCollection.fn.legendary();
