const parser = require('../src');
const assert = require('assert');

describe('jmeter', () => {

  it('aggregate csv', () => {
    const actual = parser.parse({
      type: 'jmeter',
      files: ['tests/data/jmeter/sample.csv']
    });
    const expected = {
      "name": "TOTAL",
      "status": "PASS",
      "metrics": [
        {
          "name": "Samples",
          "type": "COUNTER",
          "sum": 39,
          "rate": 0.55535,
          "unit": "",
          "avg": 0,
          "med": 0,
          "max": 0,
          "min": 0,
          "p90": 0,
          "p95": 0,
          "p99": 0,
          "failures": [],
          "status": "PASS"
        },
        {
          "name": "Request Duration",
          "type": "TREND",
          "sum": 0,
          "rate": 0,
          "unit": "",
          "avg": 4660,
          "med": 3318,
          "max": 15513,
          "min": 1135,
          "p90": 11354,
          "p95": 11446,
          "p99": 15513,
          "failures": [],
          "status": "PASS"
        },
        {
          "name": "Error",
          "type": "RATE",
          "sum": 0,
          "rate": 0,
          "unit": "%",
          "avg": 0,
          "med": 0,
          "max": 0,
          "min": 0,
          "p90": 0,
          "p95": 0,
          "p99": 0,
          "failures": [],
          "status": "PASS"
        },
        {
          "name": "Data Sent",
          "type": "COUNTER",
          "sum": 0,
          "rate": 38.87,
          "unit": "KB/sec",
          "avg": 0,
          "med": 0,
          "max": 0,
          "min": 0,
          "p90": 0,
          "p95": 0,
          "p99": 0,
          "failures": [],
          "status": "PASS"
        },
        {
          "name": "Data Received",
          "type": "COUNTER",
          "sum": 0,
          "rate": 5166.44,
          "unit": "KB/sec",
          "avg": 0,
          "med": 0,
          "max": 0,
          "min": 0,
          "p90": 0,
          "p95": 0,
          "p99": 0,
          "failures": [],
          "status": "PASS"
        }
      ],

      "transactions": [
        {
          "name": "S01_T01_Application_Launch",
          "status": "PASS",
          "metrics": [
            {
              "name": "Samples",
              "type": "COUNTER",
              "sum": 10,
              "rate": 0.14422,
              "unit": "",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Request Duration",
              "type": "TREND",
              "sum": 0,
              "rate": 0,
              "unit": "",
              "avg": 3086,
              "med": 2832,
              "max": 3797,
              "min": 2119,
              "p90": 3795,
              "p95": 3795,
              "p99": 3797,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Error",
              "type": "RATE",
              "sum": 0,
              "rate": 0.001,
              "unit": "%",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Data Sent",
              "type": "COUNTER",
              "sum": 0,
              "rate": 5.36,
              "unit": "KB/sec",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Data Received",
              "type": "COUNTER",
              "sum": 0,
              "rate": 2662.79,
              "unit": "KB/sec",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            }
          ],

        },
        {
          "name": "S01_T02_Application_Login",
          "status": "PASS",
          "metrics": [
            {
              "name": "Samples",
              "type": "COUNTER",
              "sum": 9,
              "rate": 0.1461,
              "unit": "",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Request Duration",
              "type": "TREND",
              "sum": 0,
              "rate": 0,
              "unit": "",
              "avg": 4355,
              "med": 3273,
              "max": 10786,
              "min": 3042,
              "p90": 4416,
              "p95": 10786,
              "p99": 10786,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Error",
              "type": "RATE",
              "sum": 0,
              "rate": 0,
              "unit": "%",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Data Sent",
              "type": "COUNTER",
              "sum": 0,
              "rate": 12.94,
              "unit": "KB/sec",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Data Received",
              "type": "COUNTER",
              "sum": 0,
              "rate": 2754.9,
              "unit": "KB/sec",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            }
          ],

        }
      ]
    };
    assert.deepEqual(actual, expected);
  });

  it('aggregate csv with successful thresholds', () => {
    const actual = parser.parse({
      type: 'jmeter',
      files: ['tests/data/jmeter/sample.csv'],
      thresholds: [
        {
          metric: 'Request Duration',
          checks: ['avg<5000']
        }
      ]
    });
    const expected = {
      "name": "TOTAL",
      "status": "PASS",
      "metrics": [
        {
          "name": "Samples",
          "type": "COUNTER",
          "sum": 39,
          "rate": 0.55535,
          "unit": "",
          "avg": 0,
          "med": 0,
          "max": 0,
          "min": 0,
          "p90": 0,
          "p95": 0,
          "p99": 0,
          "failures": [],
          "status": "PASS"
        },
        {
          "name": "Request Duration",
          "type": "TREND",
          "sum": 0,
          "rate": 0,
          "unit": "",
          "avg": 4660,
          "med": 3318,
          "max": 15513,
          "min": 1135,
          "p90": 11354,
          "p95": 11446,
          "p99": 15513,
          "failures": [],
          "status": "PASS"
        },
        {
          "name": "Error",
          "type": "RATE",
          "sum": 0,
          "rate": 0,
          "unit": "%",
          "avg": 0,
          "med": 0,
          "max": 0,
          "min": 0,
          "p90": 0,
          "p95": 0,
          "p99": 0,
          "failures": [],
          "status": "PASS"
        },
        {
          "name": "Data Sent",
          "type": "COUNTER",
          "sum": 0,
          "rate": 38.87,
          "unit": "KB/sec",
          "avg": 0,
          "med": 0,
          "max": 0,
          "min": 0,
          "p90": 0,
          "p95": 0,
          "p99": 0,
          "failures": [],
          "status": "PASS"
        },
        {
          "name": "Data Received",
          "type": "COUNTER",
          "sum": 0,
          "rate": 5166.44,
          "unit": "KB/sec",
          "avg": 0,
          "med": 0,
          "max": 0,
          "min": 0,
          "p90": 0,
          "p95": 0,
          "p99": 0,
          "failures": [],
          "status": "PASS"
        }
      ],

      "transactions": [
        {
          "name": "S01_T01_Application_Launch",
          "status": "PASS",
          "metrics": [
            {
              "name": "Samples",
              "type": "COUNTER",
              "sum": 10,
              "rate": 0.14422,
              "unit": "",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Request Duration",
              "type": "TREND",
              "sum": 0,
              "rate": 0,
              "unit": "",
              "avg": 3086,
              "med": 2832,
              "max": 3797,
              "min": 2119,
              "p90": 3795,
              "p95": 3795,
              "p99": 3797,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Error",
              "type": "RATE",
              "sum": 0,
              "rate": 0.001,
              "unit": "%",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Data Sent",
              "type": "COUNTER",
              "sum": 0,
              "rate": 5.36,
              "unit": "KB/sec",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Data Received",
              "type": "COUNTER",
              "sum": 0,
              "rate": 2662.79,
              "unit": "KB/sec",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            }
          ],

        },
        {
          "name": "S01_T02_Application_Login",
          "status": "PASS",
          "metrics": [
            {
              "name": "Samples",
              "type": "COUNTER",
              "sum": 9,
              "rate": 0.1461,
              "unit": "",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Request Duration",
              "type": "TREND",
              "sum": 0,
              "rate": 0,
              "unit": "",
              "avg": 4355,
              "med": 3273,
              "max": 10786,
              "min": 3042,
              "p90": 4416,
              "p95": 10786,
              "p99": 10786,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Error",
              "type": "RATE",
              "sum": 0,
              "rate": 0,
              "unit": "%",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Data Sent",
              "type": "COUNTER",
              "sum": 0,
              "rate": 12.94,
              "unit": "KB/sec",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Data Received",
              "type": "COUNTER",
              "sum": 0,
              "rate": 2754.9,
              "unit": "KB/sec",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            }
          ],

        }
      ]
    };
    assert.deepEqual(actual, expected);
  });

  it('aggregate csv with failing thresholds', () => {
    const actual = parser.parse({
      type: 'jmeter',
      files: ['tests/data/jmeter/sample.csv'],
      thresholds: [
        {
          metric: 'Request Duration',
          checks: ['avg<500', 'p95<20000', 'min<50']
        }
      ]
    });
    const expected = {
      "name": "TOTAL",
      "status": "FAIL",
      "metrics": [
        {
          "name": "Samples",
          "type": "COUNTER",
          "sum": 39,
          "rate": 0.55535,
          "unit": "",
          "avg": 0,
          "med": 0,
          "max": 0,
          "min": 0,
          "p90": 0,
          "p95": 0,
          "p99": 0,
          "failures": [],
          "status": "PASS"
        },
        {
          "name": "Request Duration",
          "type": "TREND",
          "sum": 0,
          "rate": 0,
          "unit": "",
          "avg": 4660,
          "med": 3318,
          "max": 15513,
          "min": 1135,
          "p90": 11354,
          "p95": 11446,
          "p99": 15513,
          "failures": [
            {
              "field": "avg",
              "message": "+4160"
            },
            {
              "field": "min",
              "message": "+1085"
            }
          ],
          "status": "FAIL"
        },
        {
          "name": "Error",
          "type": "RATE",
          "sum": 0,
          "rate": 0,
          "unit": "%",
          "avg": 0,
          "med": 0,
          "max": 0,
          "min": 0,
          "p90": 0,
          "p95": 0,
          "p99": 0,
          "failures": [],
          "status": "PASS"
        },
        {
          "name": "Data Sent",
          "type": "COUNTER",
          "sum": 0,
          "rate": 38.87,
          "unit": "KB/sec",
          "avg": 0,
          "med": 0,
          "max": 0,
          "min": 0,
          "p90": 0,
          "p95": 0,
          "p99": 0,
          "failures": [],
          "status": "PASS"
        },
        {
          "name": "Data Received",
          "type": "COUNTER",
          "sum": 0,
          "rate": 5166.44,
          "unit": "KB/sec",
          "avg": 0,
          "med": 0,
          "max": 0,
          "min": 0,
          "p90": 0,
          "p95": 0,
          "p99": 0,
          "failures": [],
          "status": "PASS"
        }
      ],
      "transactions": [
        {
          "name": "S01_T01_Application_Launch",
          "status": "FAIL",
          "metrics": [
            {
              "name": "Samples",
              "type": "COUNTER",
              "sum": 10,
              "rate": 0.14422,
              "unit": "",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Request Duration",
              "type": "TREND",
              "sum": 0,
              "rate": 0,
              "unit": "",
              "avg": 3086,
              "med": 2832,
              "max": 3797,
              "min": 2119,
              "p90": 3795,
              "p95": 3795,
              "p99": 3797,
              "failures": [
                {
                  "field": "avg",
                  "message": "+2586"
                },
                {
                  "field": "min",
                  "message": "+2069"
                }
              ],
              "status": "FAIL"
            },
            {
              "name": "Error",
              "type": "RATE",
              "sum": 0,
              "rate": 0.001,
              "unit": "%",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Data Sent",
              "type": "COUNTER",
              "sum": 0,
              "rate": 5.36,
              "unit": "KB/sec",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Data Received",
              "type": "COUNTER",
              "sum": 0,
              "rate": 2662.79,
              "unit": "KB/sec",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            }
          ],
        },
        {
          "name": "S01_T02_Application_Login",
          "status": "FAIL",
          "metrics": [
            {
              "name": "Samples",
              "type": "COUNTER",
              "sum": 9,
              "rate": 0.1461,
              "unit": "",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Request Duration",
              "type": "TREND",
              "sum": 0,
              "rate": 0,
              "unit": "",
              "avg": 4355,
              "med": 3273,
              "max": 10786,
              "min": 3042,
              "p90": 4416,
              "p95": 10786,
              "p99": 10786,
              "failures": [
                {
                  "field": "avg",
                  "message": "+3855"
                },
                {
                  "field": "min",
                  "message": "+2992"
                }
              ],
              "status": "FAIL"
            },
            {
              "name": "Error",
              "type": "RATE",
              "sum": 0,
              "rate": 0,
              "unit": "%",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Data Sent",
              "type": "COUNTER",
              "sum": 0,
              "rate": 12.94,
              "unit": "KB/sec",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Data Received",
              "type": "COUNTER",
              "sum": 0,
              "rate": 2754.9,
              "unit": "KB/sec",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [],
              "status": "PASS"
            }
          ],
        }
      ]
    };
    assert.deepEqual(actual, expected);
  });

});