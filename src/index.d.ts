import BackendPerformanceTestResult from "./models/BackendPerformanceTestResult";

declare interface ParseOptions {
  type: string;
  files: string[];
}

export function parse(options: ParseOptions): BackendPerformanceTestResult;

export namespace parser { }