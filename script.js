let boxes = document.querySelectorAll(".btn");
let turnO = true;
let msgBox = document.querySelector(".msgbox");
let resetBtn = document.querySelector(".reset");


let winnerPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
boxes.forEach((boxes) => {
    boxes.addEventListener("click", () => {
        if (turnO === true) {
            boxes.innerText = "O";
            turnO = false;
        } else {
            boxes.innerText = "X";
            turnO = true;
        }
        boxes.disabled = true;

        checkWin();

    })
})

let checkWin = () => {
    for (const element of winnerPattern) {

        let pos1 = boxes[element[0]].innerText;
        let pos2 = boxes[element[1]].innerText;
        let pos3 = boxes[element[2]].innerText;


        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                boxes.forEach((e) => {
                    e.disabled = true;
                })
                msgBox.innerHTML = `<div class="msg">Player with "${pos1}" is the Winner! 🥳🥳</div>
                                    <button class="newGame styleBtn">New Game</button>`;
                msgBox.classList.remove("hidden");
                resetBtn.classList.add("hidden")
                
                let newGame = document.querySelector(".newGame");
                newGame.addEventListener("click", () => {
                    boxes.forEach((e) => {
                        e.disabled = false;
                        e.innerText = "";
                    })
                    msgBox.classList.add("hidden");
                    resetBtn.classList.remove("hidden")
                })

            }

        }
    }
}


//Reset Button
resetBtn.addEventListener("click", ()=>{
    boxes.forEach((e) => {
        e.disabled = false;
        e.innerText = "";
    })
})