
let gameSeq =[];
let userSeq=[];
let buttons = ["red","yellow","purple","green"];

let started= false;
let level = 0;
let h3= document.querySelector('h3');
//game is started
document.addEventListener("keypress", function(){
    if(started==false){
       console.log("game started");
       started = true;

       levelUp();
    }
});
//level up 
function levelUp(){
    userSeq = [];
   level++;
   h3.innerText = `Level ${level}`;
   let randomIndex = Math.floor(Math.random()*3);
   let randomColor = buttons[randomIndex];
   let randomBtn = document.querySelector(`.${randomColor}`);

  gameSeq.push(randomColor);
 
   btnflash(randomBtn);
 console.log(gameSeq);

}

function btnflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },600);
}

function btnPress(){
    
   let btn = this;
   btnflash(btn);
   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkans(userSeq.length-1);
   
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function checkans(idx){
    
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h3.innerHTML = `wrong answer! Game over! Your score was <b>${level}</b><br> Press any key to start the game`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "pink";
        },150);
        resetToZero();
    }
}

function resetToZero(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}