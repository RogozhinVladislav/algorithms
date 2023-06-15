function solution(node) {
    while (true) {
        [node.prev, node.next] = [node.next, node.prev]
        if (node.prev === null) {
            return node
        }
        node = node.prev
    }
}