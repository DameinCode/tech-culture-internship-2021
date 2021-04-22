let arr = ['1234', '4567', '9089', '2222', '23456', '67895', '45678']
const result = arr.filter(ar => ar[0] === '2' || ar[0] === '4');
console.log(result)

let ans = []
function isPrime(x) {
    let i = 2
    while (i*i <= x) {
        if(x % i == 0){
            return false
        }
        i += 1
    }
    return true
}

for (let i = 2; i < 100; i++) {
    if(isPrime(i) === true) {
        console.log(i,"Делители этого числа:", 1,"и", i)
    }
}
