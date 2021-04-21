let lang = prompt('Enter: ')
if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье')
}
else {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sanday')
}

switch(lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье')
        break
    case 'en':
        console.log('monday, Tuesday, Wwednesday, Thursday, Friday, Saturday, Sanday')
        break
    default:
        alert("Это не выполнится")
}

array_2d = ['en', 'ru']
array_2d['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sanday']
array_2d['ru'] = ['Понедельник', 'Вторник', 'Сpеда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

console.log(array_2d[lang])


let namePerson = prompt('Enter name: ')
console.log(namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель': 'студент')