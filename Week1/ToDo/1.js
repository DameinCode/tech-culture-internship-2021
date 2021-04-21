let num = 266219
let ans = 1
while(num != 0) {
    ans *= num%10
    num = Math.floor(num/10)
}

console.log(ans)
ans = ans ** 3
console.log(Number((''+ans)[0]+(''+ans)[1]))

