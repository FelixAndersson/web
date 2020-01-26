document.getElementById("knapp").addEventListener("click", printuser);

function printuser(){

var v =document.getElementById("us").value;
var b =document.getElementById("pw").value;
var n =document.getElementById("färg").value;
var m =document.getElementById("kön").value;
var c =document.getElementById("datum").value;
document.getElementById("par").style.fontSize = "50px"
  document.getElementById("par").innerHTML= v +" "+ b +" "+ n +" "+ c;
  document.body.style.backgroundColor = n;
  var ele = document.getElementsByName("kön");

          for(i = 0; i < ele.length; i++) {
              if(ele[i].checked)
              document.getElementById("par").innerHTML
                      += " "+ ele[i].value;
          }
}
