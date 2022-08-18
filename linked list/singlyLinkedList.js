class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }


    // insert at start
    insertAtStart(data){
        this.head = new Node(data, this.head)
        this.size++
    }

    // insert at end
    insertAtEnd(data){
        let lastNode = new Node(data, null)

        // if there is no node then we will make it our first node
        if(this.head === null){
            this.head = lastNode
            this.size++
        }
        else{
            // if there is already node available
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = lastNode
            this.size++
        }
    }

    // insert at index

    insertAtIndex(data, index){
        let indexedNode = new Node(data)

        //if the linked-list size is less than index(out of range)
        if(index > 0 && index > this.size){
            return;
        }

        // if the index value is zero(first index)
        if(index === 0){
            this.head = new Node(data, this.head)
            this.size++
            return;
        }

        // if index within range
        let current = this.head
        let prevNode;
        let count = 0
        while(count < index){
            prevNode = current  //the node before index
            count++
            current = current.next // the node after index
        }

        indexedNode.next = current;
        prevNode.next = indexedNode;
        this.size++
        
    }

    // get a index value

    getAtIndex(index){
        if(index > this.size){
            return;
        }
        let current = this.head;
        let count = 0;
        while(current){
            if(count === index){
                console.log(current.data)   
            }
            count++
            current = current.next
        }
        return null

    }

    // remove a index value

    removeAtIndex(index){

        if(index > 0 && index > this.size){
            return;
        }
        let current = this.head
        let prevNode
        
        if(index === 0){
            this.head = current.next;
        }
        else{
            let count = 0
            while(count < index){
                prevNode = current
                current = current.next
                count++
            }
            prevNode.next = current.next
        }
        this.size--
    }

    // clear list

    clearLinkedList(){
        this.head = null
        this.size = 0
    }

    // display list

    displayList(){
        let current = this.head
        let output = ""
        while(current){
            output += ` ${current.data} ==>`;
            current = current.next;
        }
        output += ' null'
        console.log(output)
    }

    
}


const objLL = new LinkedList();

objLL.insertAtStart(100)
objLL.insertAtStart(200)
objLL.insertAtStart(300)
objLL.insertAtEnd(50)

// console.log(objLL)    
// objLL.displayList()    //output: 300 ==> 200 ==> 100 ==> null
// console.log(objLL)    
// objLL.insertAtEnd(60)
// objLL.insertAtStart(400)
// objLL.insertAtIndex(150,0)
// objLL.clearLinkedList()
// objLL.displayList() 
// console.log(objLL)  
objLL.getAtIndex(2)
objLL.displayList() 


objLL.removeAtIndex(2)
objLL.displayList() 