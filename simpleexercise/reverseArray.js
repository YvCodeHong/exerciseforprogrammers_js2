//Reverse an Array 

//Write a function to reverse an array 

function reverseArrayInPlace(array) {
    for (let i = 0, j = array.length - 1; i < j; i++ , j--)
        [array[i], array[j]] = [array[j], array[i]];
}

const a = [1, 2, 3, 4, 5];
reverseArrayInPlace(a);
console.log(a);