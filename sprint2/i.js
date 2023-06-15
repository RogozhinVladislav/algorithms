class MyQueueSized {
    constructor(maxSize) {
        this.maxSize = maxSize
        this.queue = new Array(maxSize).fill(null)
        this.head = 0;
        this.tail = 0;
        this.sizeQueue = 0;
    }

    push(x) {
        if (this.sizeQueue < this.maxSize) {
            this.queue[this.tail] = x
            this.tail = (this.tail + 1) % this.maxSize
            this.sizeQueue += 1
        } else {
            process.stdout.write('error\n')
        }
    }

    pop() {
        if (this.sizeQueue === 0) {
            process.stdout.write('None\n')
            return
        }

        const x = this.queue[this.head]
        this.queue[this.head] = null
        this.head = (this.head + 1) % this.maxSize
        this.sizeQueue -= 1
        process.stdout.write(`${x.toString()}\n`)
    }

    peek() {
        if (this.sizeQueue === 0) {
            process.stdout.write('None\n')
            return
        }

        const x = this.queue[this.head]
        process.stdout.write(`${x.toString()}\n`)
    }

    size() {
        process.stdout.write(`${this.sizeQueue.toString()}\n`)
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
    const commandsCount = Number(_inputLines[_curLine]);
    _curLine++;
    const maxSize = Number(_inputLines[_curLine]);
    _curLine++;

    const myQueue = new MyQueueSized(maxSize);

    while (_curLine <= commandsCount + 1) {
        const line = _inputLines[_curLine].trim().split(' ');

        switch (line[0]) {
            case 'push': {
                myQueue.push(parseInt(line[1]));
                break;
            }
            case 'pop': {
                myQueue.pop()
                break;
            }
            case 'peek': {
                myQueue.peek()
                break;
            }
            case 'size': {
                myQueue.size()
                break;
            }
        }

        _curLine++;
    }
}