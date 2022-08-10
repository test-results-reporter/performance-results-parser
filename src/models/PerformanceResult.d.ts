import * as Transaction from './Transaction';

declare class PerformanceResult {
  name: string;
  samples: number;
  average: number;
  median: number;
  min: number;
  max: number;
  ninety: number;
  ninety_five: number;
  ninety_nine: number;
  error_rate: number;
  duration: number;
  throughput: number;
  received_rate: number;
  sent_rate: number;
  latency: number;
  transactions: Transaction[];
}

declare namespace PerformanceResult {}

export = PerformanceResult;