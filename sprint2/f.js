class StackMax {
    constructor() {
        this.items = []
    }

    push(x) {
        this.items.push(x)
    }

    pop() {
        if (this.items.length === 0) {
            process.stdout.write('error\n')
            return
        }
        this.items.pop()
    }

    get_max() {
        if (this.items.length === 0) {
            process.stdout.write('None\n')
            return
        }
        let max = this.items[0]
        this.items.forEach((item) => {
            max = max > item ? max : item
        })
        process.stdout.write(`${max.toString()}\n`)
    }
}

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
    _curLine++;

    const stackMax = new StackMax();

    while (_curLine <= n) {
        const line = _inputLines[_curLine].trim().split(' ');

        switch (line[0]) {
            case 'push': {
                stackMax.push(parseInt(line[1]));
                break;
            }
            case 'pop': {
                stackMax.pop()
                break;
            }
            case 'get_max': {
                stackMax.get_max()
                break;
            }
        }

        _curLine++;
    }
}