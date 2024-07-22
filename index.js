let homeScore = 0
let guestScore = 0
let homeScoreDisplay = document.getElementById("score1")
let guestScoreDisplay = document.getElementById("score2")




function incrementbtn1() {
    homeScore += 1
    homeScoreDisplay.textContent = homeScore
}

function incrementbtn2() {
    homeScore += 2
    homeScoreDisplay.textContent = homeScore
}

function incrementbtn3() {
    homeScore += 3
    homeScoreDisplay.textContent = homeScore
}


function incrementbtn4() {
    guestScore += 1
    guestScoreDisplay.textContent = guestScore
}

function incrementbtn5() {
    guestScore += 2
    guestScoreDisplay.textContent = guestScore
}

function incrementbtn6() {
    guestScore += 3
    guestScoreDisplay.textContent = guestScore
}