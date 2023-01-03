// Find the non-repeating number using brute force.

function fun(arr) {
    let obj = {};
    for (let i of arr) {
      obj[i] = obj[i] + 1 || 1;
    }
    for (let i in obj) {
      if (obj[i] === 1) {
        console.log("result", i);
      }
    }
}fun([9,5,0,3,9,0,3]);
//   This solution is also O(n), right

function bitManupulationFindDublicate(arr) {
    let xor = 0;
    for (let i of arr) {
      xor = xor ^ i;
    }
    console.log(xor);
  }bitManupulationFindDublicate([1,33,4,33,5,4,1, 5,7])

// function OddEven(n) {
//     if(n&n == 0){
//         console.log(n +' is is Even');
//     }else{
//         console.log(n +' is is Odd');
//     }
    
// }
// OddEven(2)