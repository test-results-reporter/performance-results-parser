import PerformanceResult from "./models/PerformanceResult";

declare interface ParseOptions {
  type: string;
  files: string[];
}

export function parse(options: ParseOptions): PerformanceResult;

export namespace parser { }