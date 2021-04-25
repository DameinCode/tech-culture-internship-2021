let books = document.querySelectorAll(".book")
const new_list = []
function newList() {
    new_list.push(books[1].innerHTML)
    new_list.push(books[0].innerHTML)
    new_list.push(books[4].innerHTML)
    new_list.push(books[3].innerHTML)
    new_list.push(books[5].innerHTML)
    new_list.push(books[2].innerHTML)
}
newList()
for(let i = 0; i < 6; i++) {
    books[i].innerHTML = new_list[i]
}

function changeImage() {
    document.body.style.backgroundImage = "url('C:/Users/user/Downloads/you-dont-know-js.jpg')"
}
changeImage()

books[2].querySelector("a").textContent = 'Книга 3. this и Прототипы Объектов'

document.querySelector(".adv").remove()

let array = books[4].querySelectorAll('li')

let new_array = []
new_array.push(array[9].innerText)
new_array.push(array[3].innerText)
new_array.push(array[4].innerText)
new_array.push(array[2].innerText)
new_array.push(array[6].innerText)
new_array.push(array[7].innerText)

array[2].innerText = new_array[0]
array[3].innerText = new_array[1]
array[4].innerText = new_array[2]
array[6].innerText = new_array[3]
array[7].innerText = new_array[4]
array[9].innerText = new_array[5]


let array2 = books[1].querySelectorAll('li')

let new_array2 = []
new_array2.push(array2[6].innerText)
new_array2.push(array2[8].innerText)
new_array2.push(array2[4].innerText)
new_array2.push(array2[5].innerText)

array2[4].innerText = new_array2[0]
array2[5].innerText = new_array2[1]
array2[6].innerText = new_array2[2]
array2[8].innerText = new_array2[3]

let array3 = books[5].querySelectorAll('li')
array3[9].innerText = "Глава 8: За пределами ES6"
let li = document.createElement("li");
li.appendChild(document.createTextNode("Приложение A: Благодарности!"))
books[5].querySelector('ul').appendChild(li)