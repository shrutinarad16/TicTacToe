let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#message");

let turnO = true;

//2D Array
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
turnO = true;
enableBoxes();
msgContainer.classList.add("hide");
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText=null;
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       if(turnO) {
        box.innerText = "O";
        turnO=false;
       }else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;
       
       checkWinner();
    });
});

const showWinner =(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
    for(patterns of winPatterns){
        // console.log(patterns[patterns[0]],patterns[patterns[1]],patterns[patterns[2]]);
        // console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);

        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val !="" && pos2Val != "" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val==pos3Val){
                console.log("Winner");
                showWinner(pos1Val);
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);