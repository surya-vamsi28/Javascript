const selectionSort = (arr) => {
    const length = arr.length;
    
    for (let i = 0; i < length - 1; i ++) {
        let min = i;
        console.log(arr)
        for (let j = i+1; j < length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}