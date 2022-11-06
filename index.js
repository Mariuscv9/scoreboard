let homeScore = 0
let guestScore = 0
let currentHomeScreen = document.getElementById("homescore")
let currentGuestScreen = document.getElementById("guestscore")

function plusone() {
    homeScore += 1
    currentHomeScreen.textContent = homeScore
}

function plustwo() {
    homeScore += 2
    currentHomeScreen.textContent = homeScore
}

function plusthree() {
    homeScore += 3
    currentHomeScreen.textContent = homeScore
}

function plusOne() {
    guestScore += 1
    currentGuestScreen.textContent = guestScore
}

function plusTwo() {
    guestScore += 2
    currentGuestScreen.textContent = guestScore
}

function plusThree() {
    guestScore += 3
    currentGuestScreen.textContent = guestScore
}