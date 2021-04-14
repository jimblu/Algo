const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left =< right) {
        let indexToCheck = Math.floor((left + right)/2);
        let checking = arr[indexToCheck];

        if (target === checking) {
            return indexToCheck;
        } else if (target > checking) {
            left = indexToCheck + 1;
        } else {
            right = indexToCheck - 1;
        }
    }
    return null;
}

// RECURSIVE WAY

const binarySearch = (arr, target, left, right) => {
    let indexToCheck = Math.floor((left + right)/2);
    let checking = arr[indexToCheck];
    if (right < left){
        return false;
    }
    if (target === checking) {
        return indexToCheck;
    } else if (target > checking) {
        return binarySearch(arr, target, indexToCheck + 1, right)
    } else {
        return binarySearch(arr, target, left, indexToCheck - 1)
    }
}

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 71;
const result = binarySearch(searchable, target, 0, searchable.length - 1)