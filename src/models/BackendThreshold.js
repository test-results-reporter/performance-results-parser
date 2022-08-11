class BackendThreshold {

  constructor() {
    this.name = '';
    this.average = 0;
    this.median = 0;
    this.min = 0;
    this.max = 0;
    this.ninety = 0;
    this.ninety_five = 0;
    this.ninety_nine = 0;
    this.error_rate = 0;
    this.throughput = 0;
    this.received_rate = 0;
    this.sent_rate = 0;
    this.latency = 0;
  }

}

module.exports = BackendThreshold;