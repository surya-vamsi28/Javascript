function merge(leftArray, rightArray) {
    let result = [];
    let leftPointer = 0;
    let rightPointer = 0;
    
    while (leftPointer < leftArray.length && rightPointer < rightArray.length)
    {
        if (leftArray[leftPointer] > rightArray[rightPointer]) {
            result.push(rightArray[rightPointer]);
            rightPointer++;
        } else {
            result.push(leftArray[leftPointer]);
            leftPointer++;
        }
    }
    
    return result.concat(leftArray.slice(leftPointer)).concat(rightArray.slice(rightPointer))
}

function mergeSort(arr) {
    if(arr.length === 1) {
        return arr
    }
    let median = Math.floor(arr.length/2);
    let arr1 = arr.slice(0, median);
    let arr2 = arr.slice(median);
    
    return merge(mergeSort(arr1), mergeSort(arr2))
}