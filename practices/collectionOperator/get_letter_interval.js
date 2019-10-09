'use strict';

function get_letter_interval(number_a, number_b) {
  const size = Math.abs(number_b - number_a);
  if(number_a < number_b)
      return [...Array(size+1).keys()]
          .map(i => i + number_a)
          .map(i => String.fromCharCode(96 + i));    



  return [...Array(size+1).keys()]
      .map(i => number_a - i)
      .map(i => String.fromCharCode(96 + i));
}

module.exports = get_letter_interval;
