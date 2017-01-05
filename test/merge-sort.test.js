const { expect } = require('chai');
const mergeSort = require('../merge-sort');

describe('Merge sort', () => {
  it('orders a list with distinct numbers', () => {
    expect(mergeSort([
      6, 921, 2, 83, 213, 0, 10
    ])).to.deep.equal([
      0, 2, 6, 10, 83, 213, 921
    ]);
  });

  it('orders a list with duplicate numbers', () => {
    expect(mergeSort([
      6, 921, 20, 0, 83, 213, 0, 20
    ])).to.deep.equal([
      0, 0, 6, 20, 20, 83, 213, 921
    ]);
  });
});
