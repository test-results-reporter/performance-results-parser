declare class Transaction {
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
}

declare namespace Transaction {}

export = Transaction;