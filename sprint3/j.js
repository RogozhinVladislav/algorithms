/*
To choose the best algorithm for a task, Gosha continued studying different sorting methods. Next in line is Bubble Sort — https://en.wikipedia.org/wiki/Bubble_sort

The algorithm works as follows (sorting in non-decreasing order):

On each iteration, we traverse the array and compare adjacent pairs of elements. If the element at position i is greater than the element at position i + 1, we swap them. After the first iteration, the largest element will "bubble" up to the end of the array.
We continue traversing the array and performing the same actions until we reach an iteration where no swaps are needed, indicating that the array is already sorted.
The algorithm terminates after at most n - 1 iterations, as on each iteration at least one element is placed in its correct position.

Help Gosha write the code for this algorithm.

Input Format:
The first line of input contains a positive integer n — the length of the array, where 2 ≤ n ≤ 1000.
The second line contains n integers separated by spaces, representing the elements of the array.
Each element is an integer ranging from -1000 to 1000.

Note that you only need to read 2 lines: the value of n and the input array.

Output Format:
After each traversal of the array where elements are swapped, print the intermediate state of the array.
Thus, if the sorting is completed in k iterations, you should output k lines, each containing n numbers — the elements of the array after each iteration.
If the array was already sorted initially, simply output the array.
*/

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
});

const inputLines = [];
let curLine = 1;

reader.on('line', (line) => {
    inputLines.push(line);
});

reader.on('close', solve);

function bubbleSort(array) {
    const n = array.length;

    let isSorted = false;

    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                isSwapped = true;
                isSorted = true;
            }
        }

        if (isSwapped) {
            console.log(array.join(' '));
        }
    }

    if (!isSorted) {
        console.log(array.join(' '));
    }

    return array;
}



function solve() {
    const array = inputLines[curLine].split(' ').map(Number);

    bubbleSort(array);
}
