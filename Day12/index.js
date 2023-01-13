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

// let i = 2;
// function length(i){
//     let head = n1;
//     for(let j = 1;j<=i;j++ ) {
//         if(head != null){
//             head = head.next;
//         }else{
//             return head
//         }
//     }
//     return head
// }

// console.log(length(i));


// deleteing a Node
let k = 3;
function length(k){
    let head = n1;
    for(let j = 0;j<=k;j++ ) {
        if(head.next != null && head.next.next != null && j == k && j>0){
            head.next = head.next.next;
        }else{
            head.next = null
        }
    }
}
length(k)
console.log(n4)
