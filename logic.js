let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector('#newbtn');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector('#msg');

let turnO = true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [6,4,2],
];

const resetGame = () =>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "X";
            turnO = false;
        }else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        
        checkWinner();
    });
});

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !="" && pos2Val !=""&& pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);