
const button = document.getElementById("roll");
let value = document.getElementById("current");
let dice = [1, 2, 3, 4, 5, 6];
let total = 00
let lose = document.getElementById("lose");
let win = document.getElementById("win");
let reset = document.getElementById("reset");
const diceRoll =()=> {
    roll = dice[Math.floor(Math.random()*5)];
    total = roll + total
    if (total >= 21){
        value.innerHTML = 21
        win.innerHTML= "Congratulations you have won!"
        button.style.visibility = "hidden"
    }
    else if (roll == 1){
        lose.innerHTML= "you lose"
        button.style.visibility = "hidden"
        image.src="images/one.png"
    }
    else if (roll == 2){
        value.innerHTML = total
        image.src="images/two.png"
    }
    else if (roll == 3){
        value.innerHTML = total
        image.src="images/three.png"
    }
    else if (roll == 4){
        value.innerHTML = total
        image.src="images/four.png"
    }
    else if (roll == 5){
        value.innerHTML = total
        image.src="images/five.png"
    }
    else if (roll == 6){
        value.innerHTML = total
        image.src="images/six.png"
    }
}
document.addEventListener("keypress", diceRoll)
button.addEventListener("click", () => {
    diceRoll()
})