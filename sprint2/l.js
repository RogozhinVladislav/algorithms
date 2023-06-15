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
    const firstLine = _inputLines[_curLine].trim().split(' ');
    const n = Number(firstLine[0])
    const k = Number(firstLine[1])

    const getFib = (n, k) => {
        let prev = 0
        let cur = 1
        const mod = Math.pow(10, k)

        for (let i = 1; i <= n; i++) {
            let next = prev + cur
            prev = cur
            cur = next
        }

        return prev % mod
    }

    process.stdout.write(`${getFib(n, k)}`);
}