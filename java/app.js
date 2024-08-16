let usersorce=0;
let compscore=0;
 
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepar= document.querySelector("#user-sorce");
const compscorepar=document.querySelector("#comp-sorce");

const gencompchoice=()=>{
    const options=["rock","paper","sessiors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const draw=()=>{
    console.log(" The match is draw")
    msg.innerText="Game was draw. Play game again";
    msg.style.backgroundColor= "#081b31";
}
const showwinner = (userwin,userschoice,compchoice) =>{
    if(userwin){
       usersorce++;
       userscorepar.innerText = usersorce; 
        msg.innerText=`you win!!. Your choice  ${userschoice} beats computer choice  ${compchoice}`;
        msg.style.backgroundColor="green";

    }else{
        compscore++;
        compscorepar.innerText = compscore;
        msg.innerText=`you lose!! computer choice ${compchoice} beats your choice ${userschoice}`;
        msg.style.backgroundColor="red";
    }
}
   

const playgame=(userschoice,)=>{
    console.log("choices was clicked ",userschoice);
    const compchoice=gencompchoice();
    console.log("comp choice was ",compchoice);
    if(userschoice === compchoice){
        draw();

    }else{
        let userwin=true;
        if(userschoice === "rock"){
            userwin = compchoice ==="paper"?false : true;
        }
        else if(userschoice === "paper")
            {
                userwin = compchoice === "sessiors"?false : true;
            }
            else
                {
                 userwin=compchoice === "rock "?false : true;
                }
             showwinner(userwin, userschoice,compchoice);
    }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userschoice= choice.getAttribute("id");
        playgame(userschoice);
    })
})