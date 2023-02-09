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
          "unit": "/s",
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
          "name": "Duration",
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
          "name": "Errors",
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
          "sum": 2729683,
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
          "sum": 362818330,
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
              "unit": "/s",
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
              "name": "Duration",
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
              "name": "Errors",
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
              "sum": 371654,
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
              "sum": 184633892,
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
              "unit": "/s",
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
              "name": "Duration",
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
              "name": "Errors",
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
              "sum": 797125,
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
              "sum": 169706365,
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
          metric: 'Duration',
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
          "unit": "/s",
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
          "name": "Duration",
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
          "name": "Errors",
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
          "sum": 2729683,
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
          "sum": 362818330,
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
              "unit": "/s",
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
              "name": "Duration",
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
              "name": "Errors",
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
              "sum": 371654,
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
              "sum": 184633892,
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
              "unit": "/s",
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
              "name": "Duration",
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
              "name": "Errors",
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
              "sum": 797125,
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
              "sum": 169706365,
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
          metric: 'Duration',
          checks: ['avg<500', 'p95<20000', 'min>5000']
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
          "unit": "/s",
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
          "name": "Duration",
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
              "difference": 4160
            },
            {
              "field": "min",
              "difference": -3865
            }
          ],
          "status": "FAIL"
        },
        {
          "name": "Errors",
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
          "sum": 2729683,
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
          "sum": 362818330,
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
              "unit": "/s",
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
              "name": "Duration",
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
                  "difference": 2586
                },
                {
                  "field": "min",
                  "difference": -2881
                }
              ],
              "status": "FAIL"
            },
            {
              "name": "Errors",
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
              "sum": 371654,
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
              "sum": 184633892,
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
              "unit": "/s",
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
              "name": "Duration",
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
                  "difference": 3855
                },
                {
                  "field": "min",
                  "difference": -1958
                }
              ],
              "status": "FAIL"
            },
            {
              "name": "Errors",
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
              "sum": 797125,
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
              "sum": 169706365,
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

  it('aggregate csv with scoped thresholds - OVERALL', () => {
    const actual = parser.parse({
      type: 'jmeter',
      files: ['tests/data/jmeter/sample.csv'],
      thresholds: [
        {
          metric: 'Samples',
          checks: ['sum>40'],
          scope: 'OVERALL'
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
          "unit": "/s",
          "avg": 0,
          "med": 0,
          "max": 0,
          "min": 0,
          "p90": 0,
          "p95": 0,
          "p99": 0,
          "failures": [
            {
              "field": "sum",
              "difference": -1
            }
          ],
          "status": "FAIL"
        },
        {
          "name": "Duration",
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
          "name": "Errors",
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
          "sum": 2729683,
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
          "sum": 362818330,
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
              "unit": "/s",
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
              "name": "Duration",
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
              "name": "Errors",
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
              "sum": 371654,
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
              "sum": 184633892,
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
              "unit": "/s",
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
              "name": "Duration",
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
              "name": "Errors",
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
              "sum": 797125,
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
              "sum": 169706365,
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

  it('aggregate csv with scoped thresholds - TRANSACTION', () => {
    const actual = parser.parse({
      type: 'jmeter',
      files: ['tests/data/jmeter/sample.csv'],
      thresholds: [
        {
          metric: 'Samples',
          checks: ['sum>40'],
          scope: 'TRANSACTION',
          transactions: ['S01_T02_Application_Login']
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
          "unit": "/s",
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
          "name": "Duration",
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
          "name": "Errors",
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
          "sum": 2729683,
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
          "sum": 362818330,
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
              "unit": "/s",
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
              "name": "Duration",
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
              "name": "Errors",
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
              "sum": 371654,
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
              "sum": 184633892,
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
              "unit": "/s",
              "avg": 0,
              "med": 0,
              "max": 0,
              "min": 0,
              "p90": 0,
              "p95": 0,
              "p99": 0,
              "failures": [
                {
                  "field": "sum",
                  "difference": -31
                }
              ],
              "status": "FAIL"
            },
            {
              "name": "Duration",
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
              "name": "Errors",
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
              "sum": 797125,
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
              "sum": 169706365,
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

  it('jtl', () => {
    const actual = parser.parse({
      type: 'jmeter',
      files: ['tests/data/jmeter/simple.jtl']
    });
    const expected = {
      "name": "TOTAL",
      "status": "PASS",
      "metrics": [
        {
          "name": "Samples",
          "type": "COUNTER",
          "sum": 8,
          "rate": 6.92,
          "unit": "/s",
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
          "name": "Duration",
          "type": "TREND",
          "sum": 0,
          "rate": 0,
          "unit": "",
          "avg": 1153,
          "med": 980,
          "max": 2200,
          "min": 24,
          "p90": 2200,
          "p95": 2200,
          "p99": 2200,
          "failures": [],
          "status": "PASS"
        },
        {
          "name": "Errors",
          "type": "RATE",
          "sum": 0,
          "rate": 0.13,
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
          "sum": 358,
          "rate": 0.31,
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
          "sum": 5190,
          "rate": 4.49,
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
          "name": "call1",
          "status": "PASS",
          "metrics": [
            {
              "name": "Samples",
              "type": "COUNTER",
              "sum": 4,
              "rate": 3.46,
              "unit": "/s",
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
              "name": "Duration",
              "type": "TREND",
              "sum": 0,
              "rate": 0,
              "unit": "",
              "avg": 837,
              "med": 523,
              "max": 1170,
              "min": 24,
              "p90": 1170,
              "p95": 1170,
              "p99": 1170,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Errors",
              "type": "RATE",
              "sum": 0,
              "rate": 0.25,
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
              "sum": 173,
              "rate": 0.15,
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
              "sum": 2601,
              "rate": 2.25,
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
          ]
        },
        {
          "name": "call2",
          "status": "PASS",
          "metrics": [
            {
              "name": "Samples",
              "type": "COUNTER",
              "sum": 4,
              "rate": 1.73,
              "unit": "/s",
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
              "name": "Duration",
              "type": "TREND",
              "sum": 0,
              "rate": 0,
              "unit": "",
              "avg": 1469,
              "med": 885,
              "max": 2200,
              "min": 833,
              "p90": 2200,
              "p95": 2200,
              "p99": 2200,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Errors",
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
              "sum": 184,
              "rate": 0.08,
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
              "sum": 2589,
              "rate": 1.12,
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
          ]
        }
      ]
    };
    assert.deepEqual(actual, expected);
  });

  it('jtl with latency', () => {
    const actual = parser.parse({
      type: 'jmeter',
      files: ['tests/data/jmeter/latency.jtl']
    });
    const expected = {
      "name": "TOTAL",
      "status": "PASS",
      "metrics": [
        {
          "name": "Samples",
          "type": "COUNTER",
          "sum": 2,
          "rate": 1.68,
          "unit": "/s",
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
          "name": "Duration",
          "type": "TREND",
          "sum": 0,
          "rate": 0,
          "unit": "",
          "avg": 1034,
          "med": null,
          "max": 1131,
          "min": 938,
          "p90": 1131,
          "p95": 1131,
          "p99": 1131,
          "failures": [],
          "status": "PASS"
        },
        {
          "name": "Errors",
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
          "sum": 83,
          "rate": 0.07,
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
          "sum": 1297,
          "rate": 1.09,
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
          "name": "Latency",
          "type": "TREND",
          "sum": 0,
          "rate": 0,
          "unit": "",
          "avg": 15,
          "med": null,
          "max": 20,
          "min": 10,
          "p90": 20,
          "p95": 20,
          "p99": 20,
          "failures": [],
          "status": "PASS"
        }
      ],
      "transactions": [
        {
          "name": "call1",
          "status": "PASS",
          "metrics": [
            {
              "name": "Samples",
              "type": "COUNTER",
              "sum": 1,
              "rate": 0.88,
              "unit": "/s",
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
              "name": "Duration",
              "type": "TREND",
              "sum": 0,
              "rate": 0,
              "unit": "",
              "avg": 1131,
              "med": null,
              "max": 1131,
              "min": 1131,
              "p90": 1131,
              "p95": 1131,
              "p99": 1131,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Errors",
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
              "sum": 45,
              "rate": 0.04,
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
              "sum": 647,
              "rate": 0.57,
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
          ]
        },
        {
          "name": "call2",
          "status": "PASS",
          "metrics": [
            {
              "name": "Samples",
              "type": "COUNTER",
              "sum": 1,
              "rate": 1.07,
              "unit": "/s",
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
              "name": "Duration",
              "type": "TREND",
              "sum": 0,
              "rate": 0,
              "unit": "",
              "avg": 938,
              "med": null,
              "max": 938,
              "min": 938,
              "p90": 938,
              "p95": 938,
              "p99": 938,
              "failures": [],
              "status": "PASS"
            },
            {
              "name": "Errors",
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
              "sum": 46,
              "rate": 0.05,
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
              "sum": 644,
              "rate": 0.69,
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
          ]
        }
      ]
    };
    // assert.deepEqual(actual, expected);
  });

});