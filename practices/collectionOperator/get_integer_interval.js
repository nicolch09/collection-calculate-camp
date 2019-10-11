'use strict';

function get_integer_interval(number_a, number_b) {
    const a = number_a.filter(element => element < number_b);
    return a;
}

module.exports = get_integer_interval;

