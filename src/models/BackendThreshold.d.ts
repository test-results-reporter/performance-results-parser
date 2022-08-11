declare class BackendThreshold {
  name: string;
  average: number;
  median: number;
  min: number;
  max: number;
  ninety: number;
  ninety_five: number;
  ninety_nine: number;
  error_rate: number;
  throughput: number;
  received_rate: number;
  sent_rate: number;
  latency: number;
}

declare namespace BackendThreshold {}

export = BackendThreshold;