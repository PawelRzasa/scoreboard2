let punkty = document.getElementById("poczatek")
let punkty2 = document.getElementById ("poczatek2")
let poczatek = 0
let poczatek2 = 0

function addone() {
    poczatek += 1
    punkty.textContent = poczatek
}
function addtwo() {
    poczatek += 2
    punkty.textContent = poczatek
}
function addthree() {
    poczatek += 3
    punkty.textContent = poczatek
}
function reset(){
     poczatek = 0
    punkty.textContent = 0

     
}
function addone2() {
    poczatek2 += 1
    punkty2.textContent = poczatek2
}
function addtwo2() {
    poczatek2 += 2
    punkty2.textContent = poczatek2
}
function addthree2() {
    poczatek2 += 3
    punkty2.textContent = poczatek2
}
function reset2(){
    poczatek2 = 0
    punkty2.textContent = poczatek2
    
     
}