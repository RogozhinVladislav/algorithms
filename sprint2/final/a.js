/*
Успешная попытка: https://contest.yandex.ru/contest/22781/run-report/88150307/

-- ПРИНЦИП РАБОТЫ --
Реализована двусторонняя очередь (дек) на кольцевом буфере
При создании дека создаётся массив максимального размера и заполняется null-ами
Указатели head и tail обновляются перед добавлением и удалением элементов
Если head упирается в начало массива, то переходит в конец и, если tail упирается в конец массива, то переходит в начало

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
В реализации присутствуют проверки на переполнение дека при добавлении элементов и на пустоту дека при удалении элементов

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Все операции дека (добавление и удаление элементов с обоих концов) выполняются за O(1), так как они сводятся к обновлению значений элементов массива по индексам

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пространственная сложность равна O(n), где n - максимальное количество элементов в деке, определенное при его создании
*/

class Deque {
    constructor(maxSize) {
        this.maxSize = maxSize
        this.deque = new Array(maxSize).fill(null)
        this.head = 0
        this.tail = 0
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    isFull() {
        return this.size === this.maxSize
    }

    pushBack(item) {
        if (this.isFull()) {
            process.stdout.write('error\n')
            return
        }

        if (this.isEmpty()) {
            this.head = this.tail
        } else {
            this.tail = (this.tail + 1) % this.maxSize
        }

        this.deque[this.tail] = item
        this.size += 1
    }

    pushFront(item) {
        if (this.isFull()) {
            process.stdout.write('error\n')
            return
        }

        if (this.isEmpty()) {
            this.tail = this.head
        } else {
            this.head = this.head === 0 ? this.maxSize - 1 : this.head - 1
        }

        this.deque[this.head] = item
        this.size += 1
    }

    popBack() {
        if (this.isEmpty()) {
            process.stdout.write('error\n')
            return
        }

        const item = this.deque[this.tail]
        this.tail = this.tail === 0 ? this.tail = this.maxSize - 1 : this.tail - 1
        this.size -= 1

        process.stdout.write(`${item}\n`)
    }

    popFront() {
        if (this.isEmpty()) {
            process.stdout.write('error\n')
            return
        }

        const item = this.deque[this.head]
        this.head = (this.head + 1) % this.maxSize
        this.size -= 1

        process.stdout.write(`${item}\n`)
    }
}

const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin
})

const inputLines = []
let curLine = 0

reader.on('line', line => {
    inputLines.push(line)
})

process.stdin.on('end', solve)

function solve() {
    const commandsCount = Number(inputLines[curLine])
    curLine++
    const maxSize = Number(inputLines[curLine])
    curLine++

    const deque = new Deque(maxSize)

    while (curLine <= commandsCount + 1) {
        const line = inputLines[curLine].trim().split(' ')
        const command = line[0]

        switch (command) {
            case 'push_back': {
                const value = parseInt(line[1])
                deque.pushBack(value)
                break
            }
            case 'push_front': {
                const value = parseInt(line[1])
                deque.pushFront(value)
                break
            }
            case 'pop_back': {
                deque.popBack()
                break
            }
            case 'pop_front': {
                deque.popFront()
                break
            }
        }

        curLine++
    }
}