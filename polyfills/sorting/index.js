let array = [1,9,4,2,8,7,3,6,5];

const bubbleSort = (arr) => {
    for(let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

function merge(array1, array2) {
        let result = [];
        let p1 = 0;
        let p2 = 0;
        while (array1[p1] && array2[p2]) {
            if (array1[p1] < array2[p2]) {
                result.push(array1[p1]);
                p1++;
            } else {
                result.push(array2[p2]);
                p2++;
            }
        }
        return result.concat(array1.slice(p1)).concat(array2.slice(p2))
    }

const mergeSort = (array) => {
    if (array.length === 1) {
        return array;
    }
    const median = Math.floor(array.length/2);
    
    return merge(mergeSort(array.slice(0,median)), mergeSort(array.slice(median)))
}

const quickSort = (array) => {
    if (array.length <= 1 ) {
        return array
    }
    const pivot = array[0];
    const leftArray = [];
    const rightArray = [];
    
    for(let i = 1; i < array.length; i++) {
        if (pivot > array[i]) {
            leftArray.push(array[i])
        } else {
            rightArray.push(array[i])
        }
    }
    
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

console.log(mergeSort(array))
console.log(quickSort(array))
console.log(bubbleSort(array))

