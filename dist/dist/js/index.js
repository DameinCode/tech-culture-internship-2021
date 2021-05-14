const chooseClub = document.querySelector('.chooseClub')
const openPopup = document.getElementsByTagName('a')[3]
const callBack = document. querySelector('.callback-btn')
const present = document.querySelector('.fixed-gift')
const closeBtn = document.getElementsByTagName('button')[7]
const changeSlide = document.querySelector('.services-slider')
const slides = document.querySelector('.services-slider').childNodes
const photoSlide = document.querySelector('.gallery-slider ').childNodes
const portfolioDots = document.querySelector('.portfolio-dots').childNodes

let cntSlide = 6
let cur = cntSlide
let start = false
photoSlide[11].removeAttribute('href')
photoSlide[13].removeAttribute('href')
changeSlide.childNodes[21].removeAttribute('href')
changeSlide.childNodes[23].removeAttribute('href')


openPopup.style.color = '#ffffff'
openPopup.style.textDecoration = 'none'

let hidePresent = false

chooseClub.addEventListener('click', () => {
    if (document.querySelector('.bodies').style.display === 'none') {
        document.querySelector('.bodies').style.display = 'block'
    }
    else {
        document.querySelector('.bodies').style.display = 'none'
    }
})

// open modal
callBack.addEventListener('click', () => {
    document.querySelector('#callback_form').style.display = 'block'
})

document.addEventListener('click', (event) => {
    if (event.target.className == "close_icon") {
        document.querySelector('#callback_form').style.display = 'none'
    }
})


// close modals
document.addEventListener('click', (event) => {
    if (event.target.className === "close_icon") {
        document.querySelector('#free_visit_form').style.display = 'none'
        if(document.querySelector('#gift') !== null) {
            document.querySelector('#gift').style.display = 'none'
        }
    }
})

if (closeBtn !== undefined) {
    closeBtn.addEventListener('click', () => {
        document.querySelector('#gift').style.display = 'none'
    })
}


// open popup
openPopup.addEventListener('click', () => {
    document.querySelector('#free_visit_form').style.display = 'block'
})


// hide gist and open modal
if (present !== null) {
    present.addEventListener('click', () => {
        if (hidePresent === false) {
            present.style.display = 'none'
            document.querySelector('#gift').style.display = 'block'
            hidePresent = true
        }
    })
}

function sliderMain() {
    let left = document.createElement('div')
    left.innerHTML =
    document.querySelector('.main-slider').appendChild()
}

changeSlide.addEventListener('click', (event)=>{
    if (event.target.className === 'portfolio-btn next') {
        let temp = slides[1].innerHTML
        for (let i = 1; i < 9; i++) {
            if (i%2 !== 0 ) {
                slides[i].innerHTML = slides[i+2].innerHTML
            }
        }
        slides[9].innerHTML = temp
        if(window.stop !== undefined) {
            window.stop();
        } else if (document.execCommand !== undefined) { // для IE
            document.execCommand("Stop", false);
        }
    }
    else if (event.target.className === 'portfolio-btn prev') {
        let temp2 = slides[9].innerHTML
        for (let i = 9; i > 1; i--) {
            if (i%2 !== 0 ) {
                slides[i].innerHTML = slides[i-2].innerHTML
            }
        }
        slides[1].innerHTML = temp2
        if(window.stop !== undefined) {
            window.stop();
        } else if (document.execCommand !== undefined) { // для IE
            document.execCommand("Stop", false);
        }
    }
})

function changeSlides(cur) {
    photoSlide[cntSlide*2 - 1].classList.add("slide-active")
    photoSlide[cur*2 - 1].classList.remove("slide-active")
    portfolioDots[cntSlide*2 - 1].classList.add("dot-active")
    portfolioDots[cur*2 - 1].classList.remove("dot-active")
}

photoSlide[11].addEventListener('click', () => {
    if (! start) {
        cntSlide = 6
        start = true
    }
    cur = cntSlide === 6  ? 1 : cntSlide
    if (cntSlide === 1) {
        cntSlide = 6
    }
    cntSlide --
    changeSlides(cur)
})

photoSlide[13].addEventListener('click', () => {
    if (! start) {
        cntSlide = 1
        start = true
    }
    cur = cntSlide === 0  ? 5 : cntSlide
    if (cntSlide === 5) {
        cntSlide = 0
    }
    cntSlide ++
    changeSlides(cur)
})

portfolioDots[1].addEventListener('click', () => {
    cur = cntSlide
    if (! start ) {
        cur = 1
        start = true
    }
    cntSlide = 1
    changeSlides(cur)
})

portfolioDots[3].addEventListener('click', () => {
    cur = cntSlide
    if (! start ) {
        cur = 1
        start = true
    }
    cntSlide = 2
    changeSlides(cur)
})

portfolioDots[5].addEventListener('click', () => {
    cur = cntSlide
    if (! start ) {
        cur = 1
        start = true
    }
    cntSlide = 3
    changeSlides(cur)
})

portfolioDots[7].addEventListener('click', () => {
    cur = cntSlide
    if (! start ) {
        cur = 1
        start = true
    }
    cntSlide = 4
    changeSlides(cur)
})

portfolioDots[9].addEventListener('click', () => {
    cur = cntSlide
    if (! start ) {
        cur = 1
        start = true
    }
    cntSlide = 5
    changeSlides(cur)
})

