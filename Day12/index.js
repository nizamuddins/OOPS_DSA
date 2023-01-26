// LinkedList() finding ith Node

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const n1 = new Node(7);
const n2 = new Node(2);
const n3 = new Node(1);
const n4 = new Node(3);
const n5 = new Node(3);
const n6 = new Node(3);
const n7 = new Node(6);
const n8 = new Node(6);
const n9 = new Node(6);



n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
n7.next = n8;
n8.next = n9;


// var partition = function (head,x) {
//     let array = [];
//     while (head != null) {
//         array.push(head.val);
//         head = head.next;
//     }
//     array.sort((a, b) => {
//         return a - b;
//     })
//     class Node {
//         constructor(val) {
//             this.val = val;
//             this.next = null;
//         }
//     }
//     let h1 = null;
//     let prev = null
//     for (let i of array) {
//         if (h1 === null) {
//             h1 = new Node(i);
//             prev = h1;
//         } else {
//             prev.next = new Node(i);
//             prev = prev.next;
//         }
//     }
//     return h1
// };
// console.log(partition(n1,6))
// // finding linllistlength 

// let i = 2;
// function length(i) {
//     let head = n1;
//     for (let j = 1; j <= i; j++) {
//         if (head != null) {
//             head = head.next;
//         } else {
//             return head
//         }
//     }
//     return
//     head
// }
// console.log(length(i));

// // deleteing a Node 

// let k = 0;
// function deleteNode(k) {
//     let head = n1;
//     for (let j = 1; j <= k; j++) {
//         if (head.next != null && head.next.next != null && j == k) {
//             head.next = head.next.next;
//             return head;
//         } else if (head.next != null && j == k) {
//             head.next = null;
//             return head;
//         } else if (head.next == null && j == k) {
//             return head;
//         }
//         head = head.next;
//     }
//     if (k === 0) {
//         head.next = null;
//         return head
//     }
// }
// console.log(deleteNode(k))

var isValid = function(s) {
    let stack = [];
   for(let i =0;i<s.length;i++){
       if(s[i] == ")" || s[i] == "}" || s[i] == "]"){
           stack.push(s[i])
       }
   }
   for(let j = 0;j<s.length;j++){
       if(s[j] == "(" && stack.pop() !== ")"){
           return false
       }else if(s[j] == "[" && stack.pop() !== "]"){
           return false
       }else if(s[j] == "{" && stack.pop() !== "}"){
           return false
       }
   }
   
   return true
};

console.log(isValid("(()"))