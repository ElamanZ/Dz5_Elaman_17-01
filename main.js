const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")

const convert = (elem, target, target2) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response)
            target2
                ? (target.value = (elem.value / response.usd).toFixed(2))
                : (target.value = (elem.value * response.usd).toFixed(2))
            elem.value === "" && (target.value = "")
        })
    })
}
convert(som, usd, 1)
convert(usd, som, "")

const convert2 = (elem, target3, target4) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data2.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response)
            target4
                ? (target3.value = (elem.value / response.eur).toFixed(2))
                : (target3.value = (elem.value * response.eur).toFixed(2))
            elem.value === "" && (target3.value = "")
        })
    })
}
convert2(som, eur, 1)
convert2(eur, som, "")