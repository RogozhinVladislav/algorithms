function solution(node, deletedIndex) {
    if (deletedIndex === 0) {
        return node.next;
    }

    let i = 0;
    let previousNode = node;

    while (i < deletedIndex - 1) {
        if (!previousNode) throw new Error("Such element does not exist");
        previousNode = previousNode.next;
        i++;
    }

    previousNode.next = previousNode.next.next;
    return node;
}