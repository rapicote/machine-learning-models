// types.ts
import { PrismaClient } from '@prisma/client';

export type ModelType = 'classification' | 'regression' | 'clustering';

export type AlgorithmType = 'neural_network' | 'random_forest' | 'support_vector_machine';

export type DatasetType = 'csv' | 'pandas_dataframe';

export interface ModelConfig {
  type: ModelType;
  algorithm: AlgorithmType;
  dataset: DatasetType;
  epochs: number;
  batch_size: number;
  learning_rate: number;
}

export interface DatasetConfig {
  type: DatasetType;
  filePath?: string;
}

export interface TrainingData {
  inputs: number[][];
  outputs: number[][];
}

export interface PrismaClientExtended extends PrismaClient {
  $transaction: (fn: (client: PrismaClientExtended) => any) => any;
}