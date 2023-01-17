// LinkedList()
// finding ith Node

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const n1 = new Node(10);
const n2 = new Node(20);
const n3 = new Node(30);
const n4 = new Node(40);
const n5 = new Node(50);


n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
console.log(n1)

// finding linllistlength

let i = 2;
function length(i){
    let head = n1;
    for(let j = 1;j<=i;j++ ) {
        if(head != null){
            head = head.next;
        }else{
            return head
        }
    }
    return head
}

console.log(length(i));


// deleteing a Node
let k = 0;
function deleteNode(k){
    let head = n1;
    for(let j = 1;j<=k;j++ ) {
        if(head.next != null && head.next.next != null && j == k){
            head.next = head.next.next;
            return head;
        }else if(head.next != null  && j == k){
            head.next = null;
            return head;
        }else if(head.next == null && j == k){
            return head;
        }
        head = head.next;
    }
    if(k === 0){
        head.next = null;
        return head
    }
}
console.log(deleteNode(k))

