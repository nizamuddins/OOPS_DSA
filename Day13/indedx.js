// // cycle of linkedlist

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// const n1 = new Node(10);
// const n2 = new Node(20);
// const n3 = new Node(30);
// const n4 = new Node(40);
// const n5 = new Node(50);


// n1.next = n2;
// n2.next = n3;
// n3.next = n4;
// n4.next = n5;
// n5.next = n2;

// function isCyclic(n1){
//     let s = n1;
//     let f = n1;

// while(f != null && f.next.next != null){
//     s = s.next;
//     f = f.next.next;
//     if(s == f){
//         return true
//     };
// }
// return false
// }
// console.log(isCyclic(n1))

// reverse LInkedlist


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
function reverseLinkedlist(head){
    let curr = head;
    let prev = null;
    let temp;
    while(curr != null){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
  return prev 
}
console.log(reverseLinkedlist(n1))