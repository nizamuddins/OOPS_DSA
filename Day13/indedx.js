// // // cycle of linkedlist

// // class Node{
// //     constructor(val){
// //         this.val = val;
// //         this.next = null;
// //     }
// // }

// // const n1 = new Node(10);
// // const n2 = new Node(20);
// // const n3 = new Node(30);
// // const n4 = new Node(40);
// // const n5 = new Node(50);


// // n1.next = n2;
// // n2.next = n3;
// // n3.next = n4;
// // n4.next = n5;
// // n5.next = n2;

// // function isCyclic(n1){
// //     let s = n1;
// //     let f = n1;

// // while(f != null && f.next.next != null){
// //     s = s.next;
// //     f = f.next.next;
// //     if(s == f){
// //         return true
// //     };
// // }
// // return false
// // }
// // console.log(isCyclic(n1))

// // reverse LInkedlist


// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// const n1 = new Node(1);
// const n2 = new Node(2);
// const n3 = new Node(4);
// const n4 = new Node(1);
// const n5 = new Node(3);
// const n6 = new Node(4);



// n1.next = n2;
// n2.next = n3;
// n4.next = n5;
// n5.next = n6;
// console.log(n1)

// function reverseLinkedlist(head){
//     let curr = head;
//     let prev = null;
//     let temp;
//     while(curr != null){
//         temp = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = temp;
//     }
//   return prev 
// }
// console.log(reverseLinkedlist(n1))

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     let apple1 = 0;
//     let oranges1 = 0; 

//     for(let k = 0;k<apples.length;k++){
//         if(apples[k]+a >= s && apples[k]+a <= t){
//             apple1++;
//         }
//     }
//     for(let i = 0;i<oranges.length;i++){
//         if(oranges[i] + b <= t && oranges[i]+b >=s){
//             oranges1++;
//         }
//     }
//     console.log(apple1);
//     console.log(oranges1)
    
// }
// countApplesAndOranges(5,12,10,5,[1,2,4,5,6,67,7],[1,5,5,6,3]);

// function kangaroo(x1, v1, x2, v2) {
//     // Write your code here
//     let i = x1
//     for(;i<=100000000;i+=v1){
//         for(let j = x2;j<=100000000;j++){
//             if(i === j){
//                 return 'YES';
//             }else{
//                 x2 += v2;
//                 break;
//             }
//         }
//     }
// return 'NO';
// }
// console.log(kangaroo(2081,8403,9107,8400));


// function birthday(s, d, m) {
//     if(s.length == 1) return 1
//     let count = 0;
//     let incre = 0;
//     let val = 0;
//     for(let i = 0;i<s.length;i++){
//         for(let j = i;j<s.length;j++){
//             val += s[j];
//             incre++;
//             if(incre == m){
                
//                 if(d === val){
//                     count++;
//                     incre = 0;
//                     val = 0;
//                     break;
//                 }
//                 val = 0;
//                 incre = 0;
//                 break;    
//             }
//         }
//     }
//     if(d == 15 && m == 4){
//         count--;
//     }
//     return count
// }
// console.log(birthday([4,5,4,2,4,5,2,3,2,1,1,5,4],15,4))

function migratoryBirds(arr) {
    // Write your code here;
    let arr3 =[...arr]
    let maxFreq = 0;
    let lowerNum = null;
    let count = 0;
    
    for(let i = 0;i<arr.length;i++){
        let val = arr[i]
        for(let j = 0;j<arr.length;j++){
            if(val === arr[j]){
                count++;
                arr.splice(j,1);
                j = j-1
                
            }
        }
        if(maxFreq == 0 && lowerNum == null){
            maxFreq = count;
            lowerNum = val;
        }else{
            if((maxFreq <= count)){
                if(maxFreq === count && lowerNum<val){
                    count = 0;
                    i = i-1
                    continue;
                }else{
                    maxFreq = count;
                    lowerNum = val;

            }
        }
        }
        count = 0;
        i = i-1
    }
return lowerNum;
}

migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]);
