function func(x) {
    if (typeof(x) !== 'string') {
        alert('It is not a STRING!')
    }
    else {
        x = x.trim()
        if(x.length > 30) {
            x = x.substring(0, 31)
            x += '...'
        } 
        return x
    }
}

let x = prompt('Enter string !')
if (isNaN(parseInt(x))) {
    console.log(func(x))
} 
else {
    x = parseInt(x)
    func(x)
}