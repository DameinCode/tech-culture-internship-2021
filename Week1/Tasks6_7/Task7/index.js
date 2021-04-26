class DomElement {
    selector = ''
    height = 0
    width = 0
    bg = ''
    fontSize = 0

    constructor() {}

    createElement(selector, height, width, bg, fontSize) {
        this.selector = selector
        this.height = height
        this.width = width
        this.bg = bg
        this.fontSize = fontSize
        if(this.selector[0] === '.') {
            let newDiv = document.createElement("div")
            newDiv.innerHTML = "<h1>Привет!</h1>"
            newDiv.style.cssText = 'height: ' + this.height + 'px' + ';' + 'width: ' + this.width + 'px' + ';' + 'background: '+ this.bg + ';' + 'font-size: ' + this.fontSize + 'px' +';'
            document.body.appendChild(newDiv)
        } 
        else if (this.selector[0] === '#') {
            let newDiv = document.createElement("p")
            newDiv.style.cssText = 'height: ' + this.height + 'px' + ';' + 'width: ' + this.width + 'px' + ';' + 'background: '+ this.bg + ';' + 'font-size: ' + this.fontSize + 'px' +';'
            newDiv.innerHTML = "Привет!"
            document.body.appendChild(newDiv)
        }
    }
}

new DomElement().createElement('.elem', 15, 30, 'red', 5)
new DomElement().createElement('#elem', 15, 30, 'red', 5)
