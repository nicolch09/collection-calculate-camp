'use strict';

function grouping_count(collection) {
  let result = {};
  collection.sort();

  collection.forEach(element => {
      result[element] = collection.lastIndexOf(element) + 1;
      collection.splice(element);
    });
  return result;
}

module.exports = grouping_count;
