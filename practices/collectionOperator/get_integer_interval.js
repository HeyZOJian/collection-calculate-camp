'use strict';

function get_integer_interval(number_a, number_b) {
  let direction = number_a < number_b ? 1: -1
  let result = buildCollectionInInterval(number_a,number_b, direction)
  return result
}

function isContinue(now, target, direction) {
  if (direction > 0 && now <= target)
    return true
  else if (direction < 0 && now >= target)
    return true
  else
    return false
}

function buildCollectionInInterval(number_a, number_b, direction){
  let result = []
  for (let index = number_a; isContinue(index, number_b,direction); index += direction) {
    result.push(index)
  }
  return result
}

module.exports = get_integer_interval;
