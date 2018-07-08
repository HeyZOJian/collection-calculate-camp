'use strict';

function get_intersection(collection_a, collection_b) {
  let intersectionCollection = []
  for (const itemB of collection_b) {
    for (const itemA of collection_a) {
      if (itemA === itemB) {
        intersectionCollection.push(itemA)
      }
    }
  }
  return intersectionCollection
}

module.exports = get_intersection;
