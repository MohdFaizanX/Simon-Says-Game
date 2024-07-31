let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started= false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

       levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
 //random btn choose
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx){
  //  console.log("curr level:",level);
    //let idx=level-1;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was<b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="white"
        })
        reset()
    }
}

function btnPress(){
    let btn=this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}