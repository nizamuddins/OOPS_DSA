// LinkedList() finding ith Node

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const n1 = new Node(0);
const n2 = new Node(1);
const n3 = new Node(2);
// const n4 = new Node(40);
// const n5 = new Node(50);
// const n6 = new Node(60);
// const n7 = new Node(70);


n1.next = n2;
n2.next = n3;
// n3.next = n4;
// n4.next = n5;
// n5.next = n6;
// n6.next = n7;





// var swapPairs = function (head) {
//     let length = 0;
//     let l = head;
//     let lastNode = 0
//     while (l != null) {
//         lastNode = l;
//         l = l.next;
//         length++
//     }
//     let s = head;
//     let f = head.next;
//     let prev = null;
//     let val = 0

//     while (s != null && f != null) {
//         let temp1 = s;
//         s = s.next.next;
//         temp1.next = null;
//         let temp2 = f;
//         if(f.next == null){
//             f = null;
//         }else{
//             f = f.next.next;
//         }
//         temp2.next = temp1;
//         if (prev == null) {
//             prev = temp2;
//         } else {
//             let prev2 = prev
//             while (prev2.next != null) {
//                 prev2 = prev2.next;
//             }
//             prev2.next = temp2;
//         }

//     }
//     if(length%2 != 0){
//         let prev3 = prev
//         while(prev3.next != null){
//             prev3 = prev3.next
//         }
//         prev3.next = lastNode
//     }
//     return prev
// };
// console.log(swapPairs(n1))
let k = 4
var rotateRight = function (head, k) {
    // let head1 = head;
    let newList = null;
    let s = head;
    for (let i = 0; i < k; i++) {
        while (s.next != null) {
            if(s.next != null && s.next.next === null){
                newList = s.next;
                s.next = null
                newList.next = s;
                console.log(head);
                break
            }
            s = s.next;
        }
        // while(newList != null){
        //     if(newList.next != null && newList.next.next == null){
        //         newList.next = null;
        //         break
        //     }
        //     newList = newList.next;
        // }
        // s.next = head1;
        // head1 = s;
        // newList = head1;
        // console.log(newList )
    }
    return s;
};
console.log(rotateRight(n1,k))
// finding linllistlength let i = 2; function length(i){     let head = n1;
// for(let j = 1;j<=i;j++ ) {         if(head != null){             head =
// head.next;         }else{             return head         }     }     return
// head } console.log(length(i));  deleteing a Node let k = 0; function
// deleteNode(k){     let head = n1;     for(let j = 1;j<=k;j++ ) {
// if(head.next != null && head.next.next != null && j == k){
// head.next = head.next.next;             return head;         }else
// if(head.next != null  && j == k){             head.next = null;
// return head;         }else if(head.next == null && j == k){
// return head;         }         head = head.next;     }     if(k === 0){
// head.next = null;         return head     } } console.log(deleteNode(k))
