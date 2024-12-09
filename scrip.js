let user=0;
let computer=0;
function incre(a){
    let b=Math.floor(Math.random() * 3)+1;
    if(b==1){
        document.getElementById("comp-move").innerHTML="Computer Move : Stone";
    }else if(b==2){
        document.getElementById("comp-move").innerHTML="Computer Move : paper";
    }else{
        document.getElementById("comp-move").innerHTML="Computer Move : Scissor";
    }
    document.getElementById("comp-move").style.display='block';
    if(a==b || a==-1){

    }
    else if(((a==1) && (b==3)) || ((a==2) && (b==1)) || ((a==3) && (b==2))){
        user++;
    }
    else{
        computer++;
    }

    let t="<h1>";
    t+="your Score is ";
    t+=String(user);
    t+="<br>";
    t+="  Computer Score is ";
    t+=String(computer);
    t+="</h1>";
    document.getElementById("score").innerHTML=t;
    document.getElementById("choose").style.display="none";
    console.log("al");
}
function res(){
    user=0;
    computer=0;
    incre(-1);
}
