let age = 16;
function checkVotingEligibility() {
    if (age<18){
        console.log("You are too young to vote!")
    } else {
        console.log("You are eligible to vote!")
    }
}
checkVotingEligibility()

let score = 75;

function assignGrade(){
    if (score>=90){
        console.log("A")
    } else if (80 <= score){
        console.log("B")
    } else if (70 <= score){
        console.log("C")
    } else if (60 <= score){
        console.log("D")
    } else {
        console.log("F")
    }
}
assignGrade()

let isVacationTime = false;

function planVacation(){
    if (isVacationTime === true){
        console.log("Enjoy your vacation!")
    } else {
        console.log("Hang is there, vacation time is coming!")
    }
}
planVacation()

let favoriteColors = ["Black", "White", "Pink", "Green", "Red", "Yellow", "Blue",
"Purple"]

function displayColors(){
    for (let i = 0; i<favoriteColors.length; i++){
        console.log(favoriteColors[i])
    }
}
displayColors()


for (let count =10; count>=1; count--){
    console.log(count)
}