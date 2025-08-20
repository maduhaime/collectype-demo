export enum BallMaterialEnum {
  LEATHER = 'leather',
  RUBBER = 'rubber',
  LATEX = 'latex',
  PLASTIC = 'plastic',
  FOAM = 'foam',
  FELT = 'felt',
  SYNTHETIC = 'synthetic',
}

export type BallMaterial = `${BallMaterialEnum}`;

export enum BallShapeEnum {
  ROUND = 'round',
  OVAL = 'oval',
  ELONGATED = 'elongated',
}

export type BallShape = `${BallShapeEnum}`;

export type Ball = {
  id: number;
  name: string;
  shape: BallShape;
  material: BallMaterial;
  diameter: number;
  weight: number;
  price: number;
  color: string;
  brand: string;
  isInflatable: boolean;
  isWaterproof: boolean;
  description?: string;
};
