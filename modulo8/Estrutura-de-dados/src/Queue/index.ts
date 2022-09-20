class Queue {
    constructor(
        public itens: any[] = [],
        public length: number = 0
    ){}

    enqueue(item:any){
      this.itens[this.length] = item
      this.length++
    }

    dequeue(){
        if(this.length === 0){
            console.log("Empty Queue")
        } else {
            const removedItem = this.itens[0]
                for (let i=0; i< this.length; i++){
                    this.itens[i] = this.itens[i+1]
                }
                this.length--
                this.itens.length = this.length
            return removedItem
        }
    }

    front(){
        return this.itens[0]
    
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue)
queue.dequeue()
console.log(queue)

queue.dequeue()

console.log(queue.front())
