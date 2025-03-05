let gameSeq=[];
let userSeq=[];
let started = false;
let level = 0;
let h2 = document.querySelector("h2")
let btns = ["yellow","red","purple","green"]

 
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("Game started")
    started =true;
    levelUp();
}

})

function gameFlash(btn) {
    btn.classList.add("flash"); // Corrected classList usage
    setTimeout(function () {
        btn.classList.remove("flash"); // Corrected classList usage
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash"); // Corrected classList usage
    setTimeout(function () {
        btn.classList.remove("userflash"); // Corrected classList usage
    }, 250);
}



function levelUp(){
    userSeq = []
    level ++;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random()*3);
    let randColor = btns[randidx];
    let randbtn = document.querySelector(`.${randColor}`)
    gameFlash(randbtn);
    // console.log(randColor)
    // console.log(randbtn)
    // console.log(randidx)
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randbtn)
}
function checkAns(idx){
   
   if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000)
    }
   }
   else{
    h2.innerHTML = `Game over! your score was <b> ${level}</b> <br>
    press any key to start`
    document.querySelector("body").style.backgroundColor = "red"
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white"
    },150)
    reset();
    
   }
}

function btnPress(){
   let btn = this;
   userFlash(btn)
  let userColor = btn.getAttribute("id")
   userSeq.push(userColor)
   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset (){
started = false;
gameSeq = [];
userSeq = [];
level = 0;

}