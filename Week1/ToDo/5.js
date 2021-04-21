const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sanday']
const todayDay = new Date();
let nw = document.createElement('div')
getAnswer()
function getAnswer() {
    week.forEach((item, i) => {
        nw = document.createElement('div')
        if (i === todayDay.getDay()-1) { 
            nw.classList.add('bold')
            nw.textContent = week[i]
        }
        if (week[i] == 'Saturday' || week[i] == 'Sanday') { 
            nw.classList.add('cursiv')
            nw.textContent = week[i]
        } 
        else {
            nw.textContent = week[i]
        }
        document.getElementById("days").appendChild(nw)
    })
}