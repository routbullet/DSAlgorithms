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
        let lastNode = new Node(data)

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

    // get a index

    // remove a index

    // clear list

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
console.log(objLL)    

objLL.displayList()    //output: 300 ==> 200 ==> 100 ==> null