class Node {
    constructor(data){
      this.data = data;
      this.next = null;
    }
}

class LinkedList {
    constructor(){
        this._length = 0;
        this.head = null;
    }

    printList(){
        let currentNode = this.head;
        while(currentNode.next){
            console.log(currentNode.data);
            currentNode = currentNode.next
        }
    }

    addToTheEnd(data){
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            this._length++;
            return newNode;
        }
        
        let currentNode = this.head;

        while(currentNode.next){
            currentNode = currentNode.next
        }

        currentNode.next = newNode
        this._length++
    };

    addToTheBeginning(data){
        if (this.head === null) {
            this.head = newNode;
            this._length++;
            return newNode;
        }
        
        let newNode = new Node(data)
        newNode.next = this.head;
        this.head = newNode;
        this._length++       
    };

    removeItem(index){
        if (index === 0){
            this.head = this.head.next;
            this._length--;
            return;
        }

        let currentNode = this.head
        for(let i=0; i<index; i++){
            if(i == (index-1)){
                currentNode.next = currentNode.next.next
                this._length--
            }
            currentNode = currentNode.next;
        }
    }
}

const list = new LinkedList();

list.addToTheEnd({name: 'Sharon'})
list.addToTheEnd({name: 'Gila'})
list.addToTheEnd({name: 'Michael'})
list.addToTheEnd({name: 'Dana'})
list.addToTheEnd({name: 'Noy'})
list.printList()
console.log('------------------------')
list.addToTheBeginning({name:'Maya'})
list.printList()
console.log('------------------------')

list.removeItem(2)
list.printList()
console.log('------------------------')

list.removeItem(0)
list.printList()
console.log('------------------------')
