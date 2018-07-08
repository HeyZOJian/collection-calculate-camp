'use strict';

function collect_all_even(collection) {
  let evenCollection = []
  for (const number of collection) {
    if (number % 2 === 0) {
      evenCollection.push(number)
    }
  }
  return evenCollection
}

module.exports = collect_all_even;
