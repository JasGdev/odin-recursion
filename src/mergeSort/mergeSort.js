export function mergeSort(array) {
  // base case:

  // sort left half of array
  // sort right half of array
  // return left half + chosen middle + right half
  if (array.length <= 1) {
    return array;
  }
  const midpointIndex = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, midpointIndex);
  const rightHalf = array.slice(midpointIndex);

  //   merging Logic

  let sortedArray = [];
  let sortedRightHalf = mergeSort(rightHalf);
  let sortedLeftHalf = mergeSort(leftHalf);
  while (sortedRightHalf.length > 0 || sortedLeftHalf.length > 0) {
    if (sortedLeftHalf.length === 0) {
      sortedArray.push(sortedRightHalf.shift());
    } else if (sortedRightHalf.length === 0) {
      sortedArray.push(sortedLeftHalf.shift());
    } else {
      if (sortedLeftHalf[0] <= sortedRightHalf[0]) {
        sortedArray.push(sortedLeftHalf.shift());
      } else {
        sortedArray.push(sortedRightHalf.shift());
      }
    }
  }
  return sortedArray;
}

