// LinkedList()

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

n1.next = n2;
n2.next = n3;
n3.next = n4;

let n = n1;
function length(n){
    let len = 0;

    while (n != null) {
        len++;
        n = n.next;
    }
    return len
}

console.log(length(n))