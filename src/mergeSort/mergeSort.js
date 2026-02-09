export function mergeSort(array, left, right){
    // base case:
    

    // sort left half of array
    // sort right half of array 
    // return left half + chosen middle + right half
    if (array.length == 0 || array.length == 1) {
        return array
    }
    const midpointIndex = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, midpointIndex)
    const rightHalf = array.slice(midpointIndex)

    const sortedLeftHalf = mergeSort(leftHalf)
    const sortedRightHalf = mergeSort(rightHalf)

s
    console.log(sortedLeftHalf);
    console.log(sortedRightHalf);
    // return sortedLeftHalf.concat(sortedRightHalf)

}

mergeSort([1, 2, 3, 4, 5])
