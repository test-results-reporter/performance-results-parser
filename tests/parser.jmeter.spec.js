const parser = require('../src');
const assert = require('assert');

describe('jmeter', () => {

  it('sample csv', () => {
    const actual = parser.parse({ type: 'jmeter', files: ['tests/data/jmeter/sample.csv'] });
    const expected = {
      name: 'TOTAL',
      samples: 39,
      average: 4660,
      median: 3318,
      min: 1135,
      max: 15513,
      ninety: 11354,
      ninety_five: 11446,
      ninety_nine: 15513,
      error_rate: 0,
      duration: 0,
      throughput: 0.55535,
      received_rate: 5166.44,
      sent_rate: 38.87,
      latency: 0,
      transactions: [
        {
          name: 'S01_T01_Application_Launch',
          samples: 10,
          average: 3086,
          median: 2832,
          min: 2119,
          max: 3797,
          ninety: 3795,
          ninety_five: 3795,
          ninety_nine: 3797,
          error_rate: 0.001,
          duration: 0,
          throughput: 0.14422,
          received_rate: 2662.79,
          sent_rate: 5.36,
          latency: 0
        },
        {
          name: 'S01_T02_Application_Login',
          samples: 9,
          average: 4355,
          median: 3273,
          min: 3042,
          max: 10786,
          ninety: 4416,
          ninety_five: 10786,
          ninety_nine: 10786,
          error_rate: 0,
          duration: 0,
          throughput: 0.1461,
          received_rate: 2754.9,
          sent_rate: 12.94,
          latency: 0
        },
        {
          name: 'S01_T03_Shipments_Page',
          samples: 8,
          average: 3731,
          median: 3318,
          min: 3109,
          max: 5149,
          ninety: 4652,
          ninety_five: 5149,
          ninety_nine: 5149,
          error_rate: 0,
          duration: 0,
          throughput: 0.16023,
          received_rate: 156.18,
          sent_rate: 15.12,
          latency: 0
        },
        {
          name: 'S01_T04_OpenShipment',
          samples: 6,
          average: 12414,
          median: 11442,
          min: 11343,
          max: 15513,
          ninety: 13390,
          ninety_five: 15513,
          ninety_nine: 15513,
          error_rate: 0,
          duration: 0,
          throughput: 0.17111,
          received_rate: 7.63,
          sent_rate: 8.26,
          latency: 0
        },
        {
          name: 'SO1_T05_Logout',
          samples: 6,
          average: 1228,
          median: 1206,
          min: 1135,
          max: 1336,
          ninety: 1300,
          ninety_five: 1336,
          ninety_nine: 1336,
          error_rate: 0,
          duration: 0,
          throughput: 0.26661,
          received_rate: 18.72,
          sent_rate: 22.94,
          latency: 0
        }
      ]
    };
    assert.deepEqual(actual, expected);
  });

});