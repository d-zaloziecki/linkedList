class Node {
    constructor(value) {
        this.data = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyList {
    constructor() {
        this._length = 0;
        this.head = null;
        this.tail = null;
    }

    printList(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next
        }
    }

    addItemToTheBeginning(data){
        let newNode = new Node(data)

        if (this._length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this._length++;
            return newNode;
        }

        this.head.previous = newNode
        newNode.next = this.head
        this.head = newNode
        this._length++;
    }
    
    addItemToTheEnd(data){
        let newNode = new Node(data)

        if (this._length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this._length++;
            return newNode;
        }

        this.tail.next = newNode
        newNode.previous = this.tail
        this.tail = newNode
        this._length++;
    }
    
    deleteItemByIndex(index){
        if(index === 0){
            this.head = this.head.next
            this.head.previous = null
            this._length--
            return;
        }

        else if (index == (this._length-1)){
            this.tail = this.tail.previous
            this.tail.next = null
            this._length-- 
            return;
        }

        let currentNode = this.head
        let nodeToDelet;
        let preNode;
        let nextNode;

        for(let i=0; i<=index; i++){
            if(i === index){
                nodeToDelet = currentNode;
                preNode = nodeToDelet.previous;
                nextNode = nodeToDelet.next     
            }
            currentNode = currentNode.next
        }

        preNode.next = nextNode;
        nextNode.previous = preNode;
        this._length-- 
    }
}

const list = new DoublyList();

list.addItemToTheBeginning({num:6})
list.addItemToTheBeginning({num:5})
list.addItemToTheBeginning({num:4})
list.addItemToTheBeginning({num:3})
list.addItemToTheBeginning({num:2})
list.addItemToTheBeginning({num:1})
list.printList();
console.log('--------------------------------')

list.addItemToTheEnd({num: 7})
list.printList();
console.log('--------------------------------')

list.deleteItemByIndex(6)
list.printList();
console.log('--------------------------------')

list.deleteItemByIndex(3)
list.printList();
console.log('--------------------------------')

list.deleteItemByIndex(0)
list.printList();
console.log('--------------------------------')