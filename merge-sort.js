module.exports = function sort(input) {
  if (input.length === 1) return input;

  const middleIndex = Math.floor(input.length / 2);
  const left = input.slice(0, middleIndex);
  const right = input.slice(middleIndex);

  return merge(sort(left), sort(right));
}

function merge(left, right) {
  const sorted = [];

  while(left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  while(left.length) sorted.push(left.shift());
  while(right.length) sorted.push(right.shift());

  return sorted;
}
