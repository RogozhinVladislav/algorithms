/*

Problem Statement: Generating Parentheses

Given an integer n, generate all possible valid parentheses sequences of length 2n. A valid parentheses sequence consists of opening and closing parentheses, and each opening parenthesis must have a corresponding closing parenthesis.

Write a function that takes an integer n (0 ≤ n ≤ 10) as input and prints all possible valid parentheses sequences in lexicographical (alphabetical) order.

Input:
An integer n (0 ≤ n ≤ 10) representing the length of parentheses sequences.

Output:
Print all possible valid parentheses sequences of length 2n, each on a new line.

Example:
Input: 3
Output:
((()))
(()())
(())()
()(())
()()()

*/


const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin
});

const inputLines = [];
let curLine = 0;

reader.on('line', line => {
    inputLines.push(line);
});

process.stdin.on('end', solve);

function solve() {
    const n = Number(inputLines[curLine]);

    const result = []

    backtrack(result, '', 0, 0, n)

    result.forEach(line => {
        process.stdout.write(`${line}\n`);
    })
}

function backtrack(result, currentString, open, close, max) {
    if (currentString.length === max * 2) {
        result.push(currentString);
        return;
    }

    if (open < max)
        backtrack(result, currentString + "(", open + 1, close, max);
    if (close < open)
        backtrack(result, currentString + ")", open, close + 1, max);
}