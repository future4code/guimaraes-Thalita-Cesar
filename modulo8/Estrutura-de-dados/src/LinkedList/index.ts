import { LinkedList, NodeItem } from "./ListNode";

const node = new NodeItem(1)
const list = new LinkedList(node)

list.add(2)
list.add(3)
list.add(4)
list.add(5)
list.add(6)



console.log(list)
console.log(list.find(5))