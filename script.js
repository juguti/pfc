var x=0
var res=document.getElementById("res")
document.getElementById("c").addEventListener("click", function(){
      x="c"
      bot()
      console.log("c")

});
document.getElementById("p").addEventListener("click", function(){
    x="p"
    bot()
});
document.getElementById("f").addEventListener("click", function(){
    x="f"
    bot()
});
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function bot() {
    y=getRandomInt(3)
    if (y==0 ){
        document.getElementById("bot").src="asset/pierre.png";
    }
    if (y==1){
        document.getElementById("bot").src="asset/papier.png";
    }
    if (y==2){
        document.getElementById("bot").src="asset/ciseaux.png";
    }
    console.log(y)
    ver()
    console.log("bot")
    
}
function ver(){
    console.log("ver")
    if (x=="c" && y==0){
        res.innerHTML="perdu"
    }
    if (x=="c" && y==1){
        res.innerHTML="gagner"
    }
    if (x=="c" && y==2){
        res.innerHTML="égalité"
    }
    if (x=="p" && y==1){
        res.innerHTML="perdu"
    }
    if (x=="p" && y==2){
        res.innerHTML="gagner"
    }
    if (x=="p" && y==0){
        res.innerHTML="égalité"
    }
    if (x=="f" && y==2){
        res.innerHTML="perdu"
    }
    if (x=="f" && y==0){
        res.innerHTML="gagner"
    }
    if (x=="f" && y==1){
        res.innerHTML="égalité"
    }
}
    
