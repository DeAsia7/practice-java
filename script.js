import { car, motorcycle } from './vehicle.js'


function hideInputs() {


    let selector = document.querySelector("select")

    let inputpayload = document.getElementById("inputpayload")

    let inputDoors = document.getElementById("inputdoor")

    let title1 = document.getElementById("title1")

    let labelDoors = document.getElementById("labelDoors")
    let labelpayload = document.getElementById("labelpayload")

    if (selector.value === "car") {
        inputpayload.style.display = "none"
        labelpayload.style.display = "none"

        inputDoors.style.display = " block"
        inputDoors.style.display = "inline"
        title1.textcontent = "create car"
    }
    if (selector.value === "motorcycle") {
        inputpayload.style.display = "block"
        inputpayload.style.display = "inline"

        inputDoors.style.display = " none"
        inputDoors.style.display = "none"
        title1.textcontent = "create motorcycle"

    }
}

function creatvehicle() {

    event.preventDefault()

    let make = inputmake.value
    let model = inputmodel.value
    let year = inputyear.value
    let doors = inputdoor.value
    let payload = inputpayload.value

    let type = inputType.value
    let pelement = document.querySelector("p")

    if (type === "car") {
        let temp = new car(make, model, year, doors)
        pelement.textContent = tmp.getdetails()
    }
    if (type == "motorcycle") {
        let temp = new motorcycle(make, model, year, payload)
        pelement.textContent = tmp.getdetails()
    }




}


window.hideInputs = hideInputs
window.creatvehicle = creatvehicle

resultcar.innerHTML