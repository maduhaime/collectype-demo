import { Pokemon } from '../models/Pokemon';

export const pokemons: Pokemon[] = [
  { id: 1, name: 'bulbasaur', types: ['grass', 'poison'], base_experience: 64, is_legendary: false },
  { id: 4, name: 'charmander', types: ['fire'], base_experience: 62, is_legendary: false },
  { id: 6, name: 'charizard', types: ['fire', 'flying'], base_experience: 240, is_legendary: false },
  { id: 7, name: 'squirtle', types: ['water'], base_experience: 63, is_legendary: false },
  { id: 25, name: 'pikachu', types: ['electric'], base_experience: 112, is_legendary: false },
  { id: 39, name: 'jigglypuff', types: ['normal', 'fairy'], base_experience: 95, is_legendary: false },
  { id: 94, name: 'gengar', types: ['ghost', 'poison'], base_experience: 225, is_legendary: false },
  { id: 131, name: 'lapras', types: ['water', 'ice'], base_experience: 187, is_legendary: false },
  { id: 143, name: 'snorlax', types: ['normal'], base_experience: 189, is_legendary: false },
  { id: 150, name: 'mewtwo', types: ['psychic'], base_experience: 306, is_legendary: true },
];