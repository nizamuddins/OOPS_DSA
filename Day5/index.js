let num = 1231;
let primeCheck = (num) => {
    if (num == 1) 
        return false;
    if (num == 2 || num == 3) 
        return true;
    if (num % 2 == 0 || num % 3 == 0) 
        return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i == 0 || num % (i + 2) == 0) 
            return false; 
            console.log(i)
    }
    return true
}
console.log(primeCheck(num));
let s = "tree"
function frequencySort(s) {
    let dic = {}
    let arr = s.split('');
    let arr2 = [];
    arr.forEach(i => {
        count = 0
        arr.forEach((j) => {
            if (i == j) {
                count += 1;
            }
        })
        dic[i] = count;
    });
    const sortable = Object
        .entries(dic)
        .sort(([
            , a
        ], [, b]) => b - a);

    for (let i of sortable) {
        for (let j = 0; j < i[1]; j++) {
            arr2.push(i[0]);
        }
    }

    return arr2.join('');
}
console.log(frequencySort(s))

