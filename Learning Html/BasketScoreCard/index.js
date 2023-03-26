let homePts = document.getElementById("homepoint")
let guePts = document.getElementById("guestpoint")

let pt = 0
let gpt = 0
function point1() {
    pt += 1
    homePts.textContent = pt
}
function point2() {
    pt += 2
    homePts.textContent = pt
}
function point3() {
    pt += 3
    homePts.textContent = pt
}
function pointg1() {
    gpt += 1
    guePts.textContent = gpt
}
function pointg2() {
    gpt += 2
    guePts.textContent = gpt
}
function pointg3() {
    gpt += 3
    guePts.textContent = gpt
}
