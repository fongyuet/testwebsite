let x = numb() + " °C"
document.getElementById("demo").innerHTML = x

function numb() {
    var random = Math.random() * (40 - (-40)) + -40
    return Math.round(random * 10) / 10
}
