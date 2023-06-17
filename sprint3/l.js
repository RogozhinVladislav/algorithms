/*

Vasya wants to save money to buy two bicycles - one for himself and one for his sister. He has a piggy bank where he can add money each day, provided that he has the financial means to do so. During the saving process, Vasya does not withdraw any money from the piggy bank.

You have information about the growth of Vasya's savings - how much money he had in the piggy bank on each day.

Your task is to determine:

The first day on which Vasya would be able to buy one bicycle.
The first day on which Vasya would be able to buy two bicycles.
Hint: The solution should work in O(log n) time complexity.

Input Format:
The first line contains the number of days, n, for which the savings observations were made. 1 ≤ n ≤ 1,000,000.
The second line contains n integers, representing the amount of money in Vasya's piggy bank each day. The numbers are given in non-decreasing order. Each number is not greater than 1,000,000.
The third line contains a positive integer, s, representing the cost of a bicycle. This number is not greater than 1,000,000.

Output Format:
You should output two numbers - the day numbers according to the problem statement.

If the required amount of money is not found in the piggy bank, you should output -1 instead of the day number.

*/


const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin
})

const inputLines = []
let curLine = 1

reader.on('line', line => {
    inputLines.push(line)
})

process.stdin.on('end', solve)

function getDays(fundsByDay, cost, left, right) {
    if (right < left) {
        return -1
    }

    const mid = Math.floor((left + right) / 2)

    if (fundsByDay[mid] >= cost) {
        // Check if there is a smaller index with the same value
        if (mid === 0 || fundsByDay[mid - 1] < cost) {
            return mid
        }
        return getDays(fundsByDay, cost, left, mid - 1)
    }

    return getDays(fundsByDay, cost, mid + 1, right)
}

function solve() {
    const fundsByDay = readArray()
    const cost = readInt()

    const first = getDays(fundsByDay, cost, 0, fundsByDay.length - 1)
    const second = getDays(fundsByDay, cost * 2, 0, fundsByDay.length - 1)

    process.stdout.write(`${first === -1 ? first : first + 1} ${second === -1 ? second : second + 1}`)
}

function readInt() {
    const n = Number(inputLines[curLine])
    curLine++
    return n
}

function readArray() {
    const arr = inputLines[curLine].trim().split(' ')
    curLine++
    return arr
}