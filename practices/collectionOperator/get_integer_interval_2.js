'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = [];
  if(number_a <= number_b){
    for(var x = number_a; x <= number_b; x++){
      if(x % 2 == 0){
        result.push(x);
      }
    }
  } else{
    for(var x = number_a; x >= number_b; x--){
      if(x % 2 == 0){
        result.push(x);
      }
    }
  }
  return result;
}

module.exports = get_integer_interval_2;
