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
    }

    // insert at end
    
    // insert at index

    // get a index

    // remove a index

    // clear list

    // display list

    displayList(){
        let current = this.head
        let output = ""
        while(current){
            output += ` ${current.data} ==>`
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
console.log(objLL)

objLL.displayList()