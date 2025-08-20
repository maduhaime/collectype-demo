import { BallCollection } from '@/collections/BallsCollection';
import { ballsData } from '@/data/ballsData';

const col = new BallCollection(ballsData);

// Exemple with generic filters
console.log('diameter :', col.fn.numberEquals('diameter', 22).count);
console.log('price :', col.fn.numberInRange('price', 20, 40).count);
console.log('name :', col.fn.stringIncludes('name', 'Soccer').count);
console.log('description :', col.fn.stringIsNotEmpty('description').items);

// Exemple with chaining filters
console.log('chain :', col.fn.booleanEquals('isWaterproof', true).numberGreaterThan('weight', 400).items);

// Exemple with piping filters (will only throw an error on runtime if the expression is invalid)
console.log('pipe :', col.fn.pipe(`booleanEquals('isWaterproof', true) | stringEquals('material', 'rubber')`).items);

// Exemple with custom business logic
console.log('inflatable :', col.fn.inflatable().count);
