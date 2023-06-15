// https://contest.yandex.ru/contest/22450/run-report/87563967/

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

function getMaxScore(keyList, maxKeysPerPlayer) {
    const playersCount = 2;

    const keyCounts = keyList.reduce((acc, cur) => {
        if (cur === '.') return acc;
        acc[cur] ? acc[cur]++ : (acc[cur] = 1);
        return acc;
    }, []);

    const maxKeysForAllPlayers = maxKeysPerPlayer * playersCount

    return keyCounts.filter((key) => key <= maxKeysForAllPlayers).length;
}

function solve() {
    const k = readInt();
    const rows = 4;
    const keyList = getKeyList(rows);

    process.stdout.write(`${getMaxScore(keyList, k)}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    const arr = _inputLines[_curLine].trim().split('');
    _curLine++;
    return arr;
}

function getKeyList(rowsCount) {
    const arr = [];
    for (let i = 0; i !== rowsCount; i++) {
        arr.push(...readArray())
    }
    return arr;
}