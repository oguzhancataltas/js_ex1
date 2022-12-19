let userName = prompt("Adınız Nedir")
let user = document.querySelector("#myName")
user.innerHTML = `${userName}`

let userTime = document.querySelector("#myClock")

userTime.innerHTML = `${new Date()}`