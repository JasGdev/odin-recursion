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
  if (leftHalf.length < rightHalf.length) {
    smallerArray = leftHalf;
    largerArray = rightHalf;
  } else {
    smallerArray = rightHalf;
    largerArray = leftHalf;
  }
  // console.log(`smaller Array = ${smallerArray} larger Array = ${largerArray}`);

  if (largerArray.length === 1) {
    return largerArray[0] <= smallerArray[0]
      ? [largerArray[0], smallerArray[0]]
      : [smallerArray[0], largerArray[0]];
  } else {
    let sortedArray = [];
    let sortedLargerArray = mergeSort(largerArray);
    let sortedSmallerArray = mergeSort(smallerArray);
    while (sortedLargerArray.length > 0 || sortedSmallerArray.length > 0) {
      if (sortedSmallerArray.length === 0) {
        sortedArray.push(sortedLargerArray.shift());
      } else if (sortedLargerArray.length === 0) {
        sortedArray.push(sortedSmallerArray.shift());
      } else {
        if (sortedSmallerArray[0] <= sortedLargerArray[0]) {
          sortedArray.push(sortedSmallerArray.shift());
        } else {
          sortedArray.push(sortedLargerArray.shift());
        }
      }
    }
    return sortedArray;
  }
}
