const sample = [
    "A data entry clerk is a member of staff employed to enter or update data into a computer system.",
"Data is often entered into a computer from paper documents using a keyboard.",
"The keyboards used can often have special keys and multiple colors to help in the task and speed up the work.",
"Proper ergonomics at the workstation is a common topic considered.",
"The Data Entry Clerk may also use a mouse, and a manually fed scanner may be involved. Speed and accuracy."];

let randompara = document.querySelector(".random");
let result = document.querySelector(".result");
let textarea = document.querySelector(".text");
const btn = document.querySelector(".btn");
let starttime,endtime;
let correct=0;
let incorrect=0;

function playgame(){
    let para = Math.floor(Math.random()*sample.length);
    randompara.textContent = sample[para];
    let date = new Date();
    starttime = date.getTime();
    btn.innerText = "Done";
}

function endgame(){
    let date = new Date();
    endtime = date.getTime();
    let totaltime = (endtime - starttime)/1000;
    let totalstr = textarea.value;
    let wordcount = countstr(totalstr);

    let speed = Math.floor((wordcount/totaltime)*60);

    accuracy(randompara.innerText,totalstr);

    let finalmsg = `You typed total ${wordcount} words at
                    the speed of ${speed} words per min with ${correct} correct words and ${incorrect} incorrect words`;
    result.textContent = finalmsg;
                }

const accuracy = (a,b)=>{
    
        a.split(" ").forEach((value,index)=>{
            if(value === b.split(" ")[index]){
                return correct++;
            }
            else{
                return incorrect++;
            }
        })
}


function countstr(str){
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener("click",function(){
    if(this.innerText == "Start"){
        textarea.disabled = false;
        playgame();
    }
    else if(this.innerText == "Done"){
        textarea.disabled = true;
        this.innerText = "Start";
        endgame();
    }
})
