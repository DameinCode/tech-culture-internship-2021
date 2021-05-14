localStorage.setItem('mozaika', JSON.stringify({'month1': 2999, 'month6': 14990, 'month9': 21990, 'month12': 14990}))
localStorage.setItem('schelkovo', JSON.stringify({'month1': 2999, 'month6': 14990, 'month9': 21990, 'month12': 14990}))

let mozaika = document.getElementById("card_leto_mozaika")
let schelkovo = document.getElementById("card_leto_schelkovo")
const promo = document.querySelector('.price-message').firstChild
const checkPhoneNumber = document.getElementById('callback_form-phone')
const priceTotal = document.querySelector('#price-total')
const checkSubmit = document.getElementById('check2')

let correctPromo = false
let m1 = document.getElementById("m1")
let m2 = document.getElementById("m2")
let m3 = document.getElementById("m3")
let m4 = document.getElementById("m4")
let isCreated = false
let type = 'mozaika'

checkSubmit.disabled = true
console.log(checkSubmit)

let price = 1999


mozaika.addEventListener('change', function() {
    if (mozaika.checked) {
        type = 'mozaika'
    }
})

schelkovo.addEventListener('change', function() {
    if (schelkovo.checked) {
        type = 'schelkovo'
    }
})


m1.addEventListener('change', () => {
    if (m1.checked) {
        price = JSON.parse(localStorage.getItem(type)).month1
        if (correctPromo) {
            price -= price*0.3
        }
        priceTotal.textContent = (Math.round(price)).toString()
    }
})

m2.addEventListener('change', () => {
    if (m2.checked) {
        price = JSON.parse(localStorage.getItem(type)).month6
        if (correctPromo) {
            price -= price*0.3
        }
        priceTotal.textContent = (Math.round(price)).toString()
    }
})

m3.addEventListener('change', () => {
    if (m3.checked) {
        price = JSON.parse(localStorage.getItem(type)).month9
        if (correctPromo) {
            price -= price*0.3
        }
        priceTotal.textContent = (Math.round(price)).toString()
    }
})

m4.addEventListener('change', () => {
    if (m4.checked) {
        price = JSON.parse(localStorage.getItem(type)).month12
        if (correctPromo) {
            price -= price*0.3
        }
        priceTotal.textContent = (Math.round(price)).toString()
    }
})


promo.addEventListener('change', () => {
    if (promo.value === "ТЕЛО2019") {
        correctPromo = true
        price -= price*0.3
        priceTotal.textContent =  (Math.round(price)).toString()
    } else {
        correctPromo = false
    }
})

function isNumbers(str) {
    for (let i = 0; i < str.length; i++) {
        if (! isNaN(parseInt(str[i])) || str[0] === '+') {
            continue
        }
        if (isNaN(parseInt(str[i]))) {
            return false
        }
    }
    return true
}

function checkPhone() {
    if (checkPhoneNumber.value.trim() === '' || (!isNumbers(checkPhoneNumber.value))) {
        if (! isCreated) {
            let div = document.querySelector('#card_order')
            let aler = document.createElement('div')
            aler.innerHTML = "<strong>! Введите</strong> правильный номер."
            aler.className = "phone-error"
            aler.style.color = "#ffffff"
            aler.style.backgroundColor = "#ffd11a"
            aler.style.width = "210px"
            aler.style.padding = "1%"
            div.insertBefore(aler, document.querySelector('#card_order').childNodes[15])
            isCreated = true
            return div
        } else {
          return 1
        }
    } return 0
}

checkPhoneNumber.addEventListener('change', () => {
    let div = checkPhone()
    if (div === 0 && isCreated) {
        document.querySelector('.phone-error').remove()
        isCreated = false
    }
})

