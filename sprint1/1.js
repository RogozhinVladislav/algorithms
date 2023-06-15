// https://contest.yandex.ru/contest/22450/run-report/87563824/

const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 1;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function getDistancesToEmptySlots(slots) {
    const distances = [];

    let distanceToEmptySlot = slots.length; // set max

    for (let i = 0; i < slots.length; i++) {
        if (slots[i] === 0) {
            distances.push(0);
            distanceToEmptySlot = 0;
            continue;
        }

        distances.push(++distanceToEmptySlot);
    }

    distanceToEmptySlot = slots.length; // set max

    for (let i = slots.length - 1; i >= 0; i--) {
        if (slots[i] === 0) {
            distanceToEmptySlot = 0;
            continue;
        }

        distanceToEmptySlot++;

        if (distanceToEmptySlot < distances[i]) {
            distances[i] = distanceToEmptySlot;
        }
    }

    return distances;
}

function solve() {
    const slots = readArray();
    const distances = getDistancesToEmptySlots(slots)
    process.stdout.write(`${distances.join(' ')}`);
}

function readArray() {
    const arr = _inputLines[_curLine].trim().split(' ').map(num => Number(num));
    _curLine++;
    return arr;
}