# CollecType Demo

This is a demo project for the [CollecType](https://www.npmjs.com/package/collectype) TypeScript collection library.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open your browser at [http://localhost:3000](http://localhost:3000)
4. View results in the browser console.

## Project Structure

- `index.html` — Landing page for the demo app.
- `src/` — Main TypeScript source folder for the demo app. Typical subfolders:
   - `collections/` — Custom collection classes and domain-specific function extensions.
   - `models/` — TypeScript types or interfaces representing your domain entities.
   - `data/` — Example data sets or fixtures used for demonstration and testing.
   - `index.ts` — Main entry point for demo logic and usage examples.

#### In a real application

- `collections/` should contain all your custom collection wrappers and any business logic for manipulating collections.
- `models/` should define your core data types, interfaces, or classes.

## About CollecType
CollecType provides type-safe, chainable collection utilities for TypeScript, inspired by the Fluent Interface pattern. See the main [CollecType repository](https://github.com/maduhaime/collectype) for documentation and advanced usage.
