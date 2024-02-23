let player = {
    name: "Jose",
    chips:  145,
}

let cards = [] //array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el") //Grabs player-el paragraph and stores it in playerEl
playerEl.textContent = player.name + ": $" + player.chips //Renders players name and chips in playerEl

//Returns random numbers between 1 - 13
function getRandomCard(){
    
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    } else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    //Renders sum and cards on the page
    cardsEl.textContent = "Cards: "

    //For loop that renders out all the cards
    for(renderCards = 0; renderCards < cards.length; renderCards++){
        cardsEl.textContent += cards[renderCards] + " " 
    }

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = ("Do you want to draw a new card?")
    } else if(sum === 21){
        message = ("You've got Blackjack!")
        hasBlackJack = true
    } else {
        message = ("You're out of the game!")
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    //Only allows the player to get a new card 
    //if she IS alive and does not have blackjack
    if(isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card")
        let card = getRandomCard()
        //Adds new card to variable
        sum += card
        cards.push(card)
        renderGame()
    }
}



