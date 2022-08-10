const fs = require('fs');
const path = require('path');
const csv_json = require('csvjson');
const PerformanceResult = require('../models/PerformanceResult');
const Transaction = require('../models/Transaction');

function getTransaction(transaction, result) {
  transaction.name = result['Label'];
  transaction.samples = parseInt(result['# Samples']);
  transaction.average = parseInt(result['Average']);
  transaction.median = parseInt(result['Median']);
  transaction.ninety = parseInt(result['90% Line']);
  transaction.ninety_five = parseInt(result['95% Line']);
  transaction.ninety_nine = parseInt(result['99% Line']);
  transaction.min = parseInt(result['Min']);
  transaction.max = parseInt(result['Max']);
  transaction.error_rate = parseFloat(result['Error %'].replace('%', ''));
  transaction.throughput = parseFloat(result['Throughput']);
  transaction.received_rate = parseFloat(result['Received KB/sec']);
  transaction.sent_rate = parseFloat(result['Sent KB/sec']);
  return transaction;
}

function getResultFromCSV(file) {
  const cwd = process.cwd();
  const results = csv_json.toObject(fs.readFileSync(path.join(cwd, file), { encoding: 'utf8' }));
    const perf_result = getTransaction(new PerformanceResult(), results[results.length - 1]);
    for (let i = 0; i < results.length - 1; i++) {
      perf_result.transactions.push(getTransaction(new Transaction(), results[i]));
    }
    return perf_result;
}

function parse(file) {
  const extension = path.extname(file);
  const cwd = process.cwd();
  if (extension === '.csv') {
    return getResultFromCSV(file);
  }
}

module.exports = {
  parse
}