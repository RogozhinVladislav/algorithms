class StackMaxEffective {
    constructor() {
        this.items = []
        this.maxes = []
    }

    push(x) {
        this.items.push(x)
        if (this.maxes.length) {
            if (x >= this.maxes.slice(-1)[0]) {
                this.maxes.push(x)
            }
        } else {
            this.maxes.push(x)
        }
    }

    pop() {
        if (this.items.length === 0) {
            process.stdout.write('error\n')
            return
        }

        const popped = this.items.pop()

        if (popped === this.maxes.slice(-1)[0]) {
            this.maxes.pop()
        }
    }

    get_max() {
        if (this.items.length === 0) {
            process.stdout.write('None\n')
            return
        }
        const max = this.maxes.slice(-1)[0]
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

    const stackMaxEffective = new StackMaxEffective();

    while (_curLine <= n) {
        const line = _inputLines[_curLine].trim().split(' ');

        switch (line[0]) {
            case 'push': {
                stackMaxEffective.push(parseInt(line[1]));
                break;
            }
            case 'pop': {
                stackMaxEffective.pop()
                break;
            }
            case 'get_max': {
                stackMaxEffective.get_max()
                break;
            }
        }

        _curLine++;
    }
}