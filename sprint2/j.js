class QueueItem {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class QueueWithLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.sizeQueue = 0;
    }

    put(x) {
        const newItem = new QueueItem(x)

        if (this.sizeQueue === 0) {
            this.tail = newItem
            this.head = newItem
        } else {
            this.tail.next = newItem
            this.tail = newItem
        }

        this.sizeQueue += 1
    }

    get() {
        if (!this.head) {
            process.stdout.write('error\n')
            return
        }

        const x = this.head.value
        this.head = this.head.next
        this.sizeQueue -= 1
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

    const myQueue = new QueueWithLinkedList();

    while (_curLine <= commandsCount) {
        const line = _inputLines[_curLine].trim().split(' ');

        switch (line[0]) {
            case 'put': {
                myQueue.put(parseInt(line[1]));
                break;
            }
            case 'get': {
                myQueue.get()
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