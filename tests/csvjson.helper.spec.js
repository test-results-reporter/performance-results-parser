const { toObject } = require('../src/helpers/csvjson');
const assert = require('assert');

describe('csvjson helper', () => {
  it('should parse basic CSV', () => {
    const csv = 'name,age\nAlice,30\nBob,25';
    const result = toObject(csv);
    assert.deepStrictEqual(result, [
      { name: 'Alice', age: '30' },
      { name: 'Bob', age: '25' }
    ]);
  });

  it('should handle different line endings', () => {
    const csv = 'name,age\r\nAlice,30\rBob,25';
    const result = toObject(csv);
    assert.deepStrictEqual(result, [
      { name: 'Alice', age: '30' },
      { name: 'Bob', age: '25' }
    ]);
  });

  it('should handle custom delimiter', () => {
    const csv = 'name;age\nAlice;30\nBob;25';
    const result = toObject(csv, { delimiter: ';' });
    assert.deepStrictEqual(result, [
      { name: 'Alice', age: '30' },
      { name: 'Bob', age: '25' }
    ]);
  });

  it('should handle quotes when quote option is true', () => {
    const csv = '"name","age"\n"Alice","30"\n"Bob","25"';
    const result = toObject(csv, { quote: true });
    assert.deepStrictEqual(result, [
      { name: 'Alice', age: '30' },
      { name: 'Bob', age: '25' }
    ]);
  });

  it('should handle escaped quotes in quoted fields', () => {
    const csv = '"name","note"\n"Alice","She said \\"Hello\\""';
    const result = toObject(csv, { quote: true });
    assert.deepStrictEqual(result, [
      { name: 'Alice', note: 'She said \\"Hello\\"' }
    ]);
  });

  it('should handle custom headers', () => {
    const csv = 'Alice,30\nBob,25';
    const result = toObject(csv, { headers: 'name,age' });
    assert.deepStrictEqual(result, [
      { name: 'Alice', age: '30' },
      { name: 'Bob', age: '25' }
    ]);
  });

  it('should prevent prototype pollution from headers and avoid column shifting', () => {
    const csv = 'name,__proto__,age,constructor,city\nAlice,polluted,30,nasty,New York';
    const result = toObject(csv);
    assert.deepStrictEqual(result, [
      { name: 'Alice', age: '30', city: 'New York' }
    ]);
    assert.strictEqual({}.polluted, undefined);
    assert.strictEqual({}.nasty, undefined);
  });

  it('should handle empty lines', () => {
    const csv = 'name,age\n\nAlice,30\n\nBob,25\n';
    const result = toObject(csv);
    assert.deepStrictEqual(result, [
      { name: 'Alice', age: '30' },
      { name: 'Bob', age: '25' }
    ]);
  });

  it('should throw error for non-string input', () => {
    assert.throws(() => toObject(null), /Invalid input/);
    assert.throws(() => toObject(123), /Invalid input/);
  });
});
