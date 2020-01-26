document.getElementById("knapp").addEventListener("click", printuser);
document.body.style.backgroundColor = localStorage.getItem("färg");

function printuser(){
var n =document.getElementById("färg").value;
document.body.style.backgroundColor = n;
localStorage.setItem("färg", n);


}
