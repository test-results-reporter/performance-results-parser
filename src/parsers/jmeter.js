const fs = require('fs');
const path = require('path');
const csv_json = require('csvjson');
const PerformanceTestResult = require('../models/PerformanceTestResult');
const Transaction = require('../models/Transaction');
const Metric = require('../models/Metric');
const Threshold = require('../models/Threshold');
const { setMetricStatus } = require('../helpers/helper');

function parse(file, thresholds) {
  const extension = path.extname(file);
  if (extension === '.csv') {
    return getResultFromCSV(file, thresholds);
  }
}

function getResultFromCSV(file, thresholds) {
  const cwd = process.cwd();
  const results = csv_json.toObject(fs.readFileSync(path.join(cwd, file), { encoding: 'utf8' }));
    const perf_result = getTransaction(new PerformanceTestResult(), results[results.length - 1], thresholds);
    for (let i = 0; i < results.length - 1; i++) {
      perf_result.transactions.push(getTransaction(new Transaction(), results[i], thresholds));
    }
    return perf_result;
}

/**
 * @param {Transaction} transaction 
 * @param {object} record 
 * @param {Threshold[]} thresholds
 * @returns 
 */
 function getTransaction(transaction, record, thresholds) {
  transaction.name = record['Label'];
  transaction.metrics.push(getSampleMetric(record, thresholds));
  transaction.metrics.push(getRequestDurationMetric(record, thresholds));
  transaction.metrics.push(getErrorMetric(record, thresholds));
  transaction.metrics.push(getDataSentMetric(record, thresholds));
  transaction.metrics.push(getDataReceivedMetric(record, thresholds));
  transaction.status = transaction.metrics.some(_metric => _metric.status === 'FAIL') ? 'FAIL' : 'PASS';
  return transaction;
}

/**
 * @param {object} record 
 * @param {Threshold[]} thresholds 
 * @returns 
 */
function getSampleMetric(record, thresholds) {
  const metric = new Metric();
  metric.name = 'Samples';
  metric.type = 'COUNTER';
  metric.sum = parseInt(record['# Samples']);
  metric.rate = parseFloat(record['Throughput']);
  setMetricStatus(metric, thresholds);
  return metric;
}

/**
 * @param {object} record 
 * @param {Threshold[]} thresholds 
 * @returns 
 */
function getRequestDurationMetric(record, thresholds) {
  const metric = new Metric();
  metric.name = 'Request Duration';
  metric.type = 'TREND';
  metric.avg = parseInt(record['Average']);
  metric.med = parseInt(record['Median']);
  metric.p90 = parseInt(record['90% Line']);
  metric.p95 = parseInt(record['95% Line']);
  metric.p99 = parseInt(record['99% Line']);
  metric.min = parseInt(record['Min']);
  metric.max = parseInt(record['Max']);
  setMetricStatus(metric, thresholds);
  return metric;
}

/**
 * @param {object} record 
 * @param {Threshold[]} thresholds 
 * @returns 
 */
function getErrorMetric(record, thresholds) {
  const metric = new Metric();
  metric.name = 'Error';
  metric.type = 'RATE';
  metric.rate = parseFloat(record['Error %'].replace('%', ''));
  metric.unit = '%';
  setMetricStatus(metric, thresholds);
  return metric;
}

/**
 * @param {object} record 
 * @param {Threshold[]} thresholds 
 * @returns 
 */
function getDataSentMetric(record, thresholds) {
  const metric = new Metric();
  metric.name = 'Data Sent';
  metric.type = 'COUNTER';
  metric.rate = parseFloat(record['Sent KB/sec']);
  metric.unit = 'KB/sec';
  setMetricStatus(metric, thresholds);
  return metric;
}

/**
 * @param {object} record 
 * @param {Threshold[]} thresholds 
 * @returns 
 */
function getDataReceivedMetric(record, thresholds) {
  const metric = new Metric();
  metric.name = 'Data Received';
  metric.type = 'COUNTER';
  metric.rate = parseFloat(record['Received KB/sec']);
  metric.unit = 'KB/sec';
  setMetricStatus(metric, thresholds);
  return metric;
}

module.exports = {
  parse
}