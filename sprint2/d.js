function solution(node, query) {
    let index = 0;
    while (node) {
        if (node.value === query) {
            return index
        }
        node = node.next
        index++
    }

    return - 1
}