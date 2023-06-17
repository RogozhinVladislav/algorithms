/*
Успешная попытка: https://contest.yandex.ru/contest/22781/run-report/88223760/

---Принцип работы---
Алгоритм работает следующим образом: он проходит по каждому символу в выражении. Если символ - число, он помещается в стек. Если символ - оператор, то из стека извлекаются два последних числа, на них применяется оператор, а результат возвращается в стек

---Доказательство корректности---
Этот алгоритм работает корректно для валидных префиксных выражений. Он обрабатывает операторы и операнды в порядке, в котором они появляются, и правильно применяет операторы к соответствующим операндам

--- Временная сложность ---
Временная сложность этого алгоритма равна O(n), где n - это количество символов в префиксном выражении. Это связано с тем, что каждый символ в выражении обрабатывается ровно один раз

---Пространственная сложность---
Пространственная сложность этого алгоритма будет примерно O(n/2), где n - это количество символов в выражении, так как в строке хранятся только операнды и их будет примерно половина
Отбрасываем константу и получаем O(n)
*/

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

function readArray() {
    const arr = inputLines[curLine].trim().split(' ')
    return arr
}

function solve() {
    const notation = readArray()

    const result = executeNotation(notation)

    process.stdout.write(`${result}`)
}

function executeNotation(notation) {
    const stack = []

    const getLastTwoNumbers = () => {
        return [stack.pop(), stack.pop()]
    }

    for (const symbol of notation) {
        if (!isNaN(symbol)) {
            stack.push(Number(symbol))
        } else {
            const [b, a] = getLastTwoNumbers()
            if (symbol === '+') {
                stack.push(a + b)
            } else if (symbol === '-') {
                stack.push(a - b)
            } else if (symbol === '*') {
                stack.push(a * b)
            } else if (symbol === '/') {
                stack.push(Math.floor(a / b))
            }
        }
    }

    return stack.pop()
}