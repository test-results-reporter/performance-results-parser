import * as Transaction from './Transaction';
import * as BackendThreshold from './BackendThreshold';

declare class BackendPerformanceTestResult {
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
  threshold: BackendThreshold;
}

declare namespace BackendPerformanceTestResult {}

export = BackendPerformanceTestResult;