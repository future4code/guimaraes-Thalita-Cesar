export class NodeItem {
    constructor(
        public value: any,
        public next: NodeItem | null = null
    ){}
}

export class LinkedList {
    constructor(
        public head: NodeItem | null
    ){}

    add(value:any){
        const nodeToAdd = new NodeItem(value)
        if(!this.head){
            this.head = nodeToAdd
        } else {
            let currentNode = this.head
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = nodeToAdd
        }
    }

    // "currentNode!" é igual a "currentNode as NodeItem"

    find(value: any){
        let currentNode = this.head
        while(currentNode!.next !== null && currentNode!.value !==value){
            currentNode = currentNode!.next
        }
        return currentNode || -1
    }
}