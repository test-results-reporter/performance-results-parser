const path = require('path');
const { totalist } = require('totalist/sync');
const globrex = require('globrex');
const Threshold = require('../models/Threshold');
const Metric = require('../models/Metric');

/**
 * @param {string} file_path 
 */
function getMatchingFilePaths(file_path) {
  if (file_path.includes('*')) {
    const file_paths = [];
    const result = globrex(file_path);
    const dir_name = path.dirname(file_path.substring(0, file_path.indexOf('*') + 1));
    totalist(dir_name, (name) => {
      const current_file_path = `${dir_name}/${name}`;
      if (result.regex.test(current_file_path)) {
        file_paths.push(current_file_path);
      }
    });
    return file_paths;
  }
  return [file_path];
}

/**
 * @param {Metric} metric 
 * @param {Threshold[]} thresholds 
 */
function setMetricStatus(metric, thresholds) {
  if (thresholds) {
    const threshold = thresholds.find(_item => _item.metric === metric.name);
    if (threshold) {
      for(let i = 0; i < threshold.checks.length; i++) {
        const check = threshold.checks[i];
        const [field, value] = check.split(/<|>/);
        const difference = metric[field] - parseFloat(value);
        if (check.includes('<')) {
          if (difference > 0) {
            metric.failures.push({
              field,
              message: `+${difference}`
            });
          } 
        } else if (check.includes('>')) {
          if (difference < 0) {
            metric.failures.push({
              field,
              message: `${difference}`
            });
          }
        }
      }
    }
  }
  metric.status = metric.failures.length > 0 ? 'FAIL' : 'PASS';
}

module.exports = {
  getMatchingFilePaths,
  setMetricStatus
}