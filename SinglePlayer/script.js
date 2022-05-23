let deck_pri = "Swapping/Multiprogramacao";
let deck_sec = "Tecnica que melhora o problema de insuficiencia de memoria, transportando processos da memoria principal para a memoria secundaria/CPU alterna entre processos para que o usuario possa utilizar varios programas paralelamente";
let deck_img = [
    "https://icon-library.com/images/swap-icon/swap-icon-0.jpg",
    "https://cdn-icons-png.flaticon.com/512/3580/3580238.png",
]
let flipped_cards = [];
let cards

function RandomCard(min, max) {
    return Math.round(Math.random() * max + min);
}

function CreateCards() {
    let deck1 = deck_pri.split("/")
    let deck2 = deck_sec.split("/")
    for (let i = 0; i < deck1.length + deck2.length;) {
        if (RandomCard(0, 1) == 1) {
            let card_picked = RandomCard(0, deck2.length - 1)
            if (deck2[card_picked] != "") {
                document.getElementById("cards_tab").innerHTML += `
                <div class="cards" value="${card_picked}">
                    <div class="front">  			
                        Carta	
                    </div>  		
                    <div class="imgbg">
                        <img src="${deck_img[card_picked]}"></img>
                    </div> 
                    <div class="back">    			
                    ${deck2[card_picked]}
                    </div>  
                </div>
                `
                deck2[card_picked] = "";
                i++;
            }
        } else {
            let card_picked = RandomCard(0, deck1.length - 1)
            if (deck1[card_picked] != "") {
                document.getElementById("cards_tab").innerHTML += `
                <div class="cards" value="${card_picked}">
                    <div class="front">  			
                        Carta
                    </div>  		
                    <div class="imgbg">
                        <img src="${deck_img[card_picked]}"></img>
                    </div>
                    <div class="back">   			
                    ${deck1[card_picked]}
                    </div>  
                </div>
                `
                deck1[card_picked] = "";
                i++;
            }
        }
    }
    cards = document.querySelectorAll(".cards")
}
CreateCards();

function VerifyCards(verifying_cards) {
    return verifying_cards[0].getAttribute("value") == verifying_cards[1].getAttribute("value")
}

function gameIsOver() {
    let deck1 = deck_pri.split("/")
    let deck2 = deck_sec.split("/")
    console.log("function")
    if (document.querySelectorAll(".flipped").length == deck1.length + deck2.length) {
        console.log(document.getElementById("congrats"))
        document.getElementById("congrats").classList.toggle("active")
    }
}
let remove_flipped = []
cards.forEach((item) => {
    item.addEventListener('click', async () => {
        console.log("ok")
        if (!item.classList.contains("flipped") && flipped_cards.length < 2) {
            item.classList.add("flipped")
            flipped_cards.push(item);

            if (flipped_cards.length == 2) {
                if (!VerifyCards(flipped_cards)) {
                    console.log(remove_flipped)
                    setTimeout(() => {
                        flipped_cards[0].classList.remove("flipped");
                        flipped_cards[1].classList.remove("flipped");
                        flipped_cards = [];
                    }, 2000)
                } else {
                    setTimeout(() => {
                        flipped_cards = [];
                    }, 500)
                    gameIsOver();
                }
            }
        }
    })
})

document.getElementById("go_back").addEventListener('click', () => {
    window.location = "../index.html";
})

document.getElementById("modal_go_back").addEventListener('click', () => {
    window.location = "../index.html";
})

document.getElementById("play_again").addEventListener('click', async () => {
    window.location = "./index.html";
})