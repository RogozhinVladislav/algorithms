const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', is_correct_bracket_seq);

function is_correct_bracket_seq() {
    const brackets = readArray();

    const stack = [];

    for (const bracket of brackets) {
        if (bracket === '(') {
            stack.push(')')
        } else if (bracket === '{') {
            stack.push('}')
        } else if (bracket === '[') {
            stack.push(']')
        } else if (stack.length === 0 || stack[stack.length - 1] !== bracket) {
            process.stdout.write(`False`);
            return
        } else {
            stack.pop()
        }
    }

    if (stack.length) {
        process.stdout.write(`False`);
        return
    }

    process.stdout.write(`True`);

}

function readArray() {
    const arr = _inputLines[_curLine].trim().split('');
    return arr;
}