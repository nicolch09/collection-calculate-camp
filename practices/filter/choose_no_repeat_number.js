'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter((value, index, self) => self.indexOf(value) == index);
}

module.exports = choose_no_repeat_number;
