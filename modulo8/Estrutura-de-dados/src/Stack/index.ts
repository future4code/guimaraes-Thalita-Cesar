class Stack {
    constructor(
        public itens: any[] = [],
        public length: number = 0
    ){}

    push(item:any){
        this.itens[this.length] = item 
        this.length++
    }

    pop(){
        if(this.length === 0){
            console.log("Empty Stack")
        } else {
            this.length--
            const removedItem = this.itens[this.length]
            this.itens.length = this.length 
            return removedItem
        }
    }

    peek(){
        return this.itens[this.length-1]
    }
}

const stack = new Stack()
stack.push(1) 
stack.push(2) 
stack.push(3) 
stack.push(4) 
stack.pop()

console.log(stack.pop())
console.log(stack)
console.log(stack.peek())
