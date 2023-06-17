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