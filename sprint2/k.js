const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function solve() {
    const n = Number(_inputLines[_curLine]);

    const getFib = (num) => {
        if (num <= 1) {
            return 1
        }

        return getFib(num - 1) + getFib(num - 2)
    }

    process.stdout.write(`${getFib(n)}`);
}