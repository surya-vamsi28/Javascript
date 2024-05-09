const binarySearch = (arr, ele) => {

    let i = 0;
    let j = arr.length - 1;
    let mid = (i + j )/ 2

    while (i < j) {
        if (arr[mid] === ele) {
            return true
        }
        if (arr[mid] > ele) {
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }
    return false
}