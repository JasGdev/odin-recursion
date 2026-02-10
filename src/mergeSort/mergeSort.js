export function mergeSort(array) {
  // base case:

  // sort left half of array
  // sort right half of array
  // return left half + chosen middle + right half
  if (array.length == 0 || array.length == 1) {
    return array;
  }
  const midpointIndex = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, midpointIndex);
  const rightHalf = array.slice(midpointIndex);

//   merging Logic
  let smallerArray = [];
  let largerArray = [];
  if (leftHalf.length === 1) {
    smallerArray = leftHalf;
    largerArray = rightHalf;
  } else if (rightHalf.length === 1) {
    smallerArray = rightHalf;
    largerArray = leftHalf;
  }

  if (largerArray.length === 1) {
    return largerArray[0] <= smallerArray[0]
      ? [largerArray[0], smallerArray[0]]
      : [smallerArray[0], [largerArray[0]]];
  } else if (largerArray.length === 2) {
    let sortedLargerArray = mergeSort(largerArray);
    let sortedArray = [];
    while (sortedLargerArray.length > 0) {
      if (smallerArray.length === 0) {
        sortedArray.push(sortedLargerArray.shift());
      } else {
        if (smallerArray[0] <= sortedLargerArray[0]) {
          sortedArray.push(smallerArray.shift());
        } else {
          sortedArray.push(sortedLargerArray.shift());
        }
      }
    }
    return sortedArray
  }

  // when both left and right are single array merge them and sort by putting smaller value first and then the larger value
  // when merging 2 arrays of length greater than 1 compare the first index of both and insert smaller and continue
//   console.log(sortedLeftHalf);
//   console.log(sortedRightHalf);
}

console.log(mergeSort([1, 2, 3, 4, 5]))