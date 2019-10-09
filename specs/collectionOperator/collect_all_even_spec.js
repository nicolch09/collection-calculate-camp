'use strict';

var collect_all_even = require('../../practices/collectionOperator/collect_all_even.js');

describe('collect_all_even', function () {

  var collection_a = [1, 2, 3, 4, 5];
  var collection_b = [2, 4];

  it('collect_all_even', function() {

    var result = collect_all_even(collection_a);
    expect(result).toEqual(collection_b);
  });
});