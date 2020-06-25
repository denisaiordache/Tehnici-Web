window.onload=function (){
  this.data();
  this.quotes();
  this.element_Meniu();
 
  
  
  

  }

function data(){
  var d = new Date();
  document.getElementById("ora").innerHTML=d;}

function quotes(){
  var arr = ["Nimic nu valoreaza mai mult decat ziua de azi. (Goethe)","Cat despre mine, sunt un optimist. Nu-mi pare de mare folos sa fiu altfel. (Winston Churchill)","Te-ai nascut sa fii un invingator dar pentru asta, trebuie sa planuiesti sa castigi, sa te pregatesti sa castigi si sa te astepti sa castigi. (Zig Ziglar)","Excelența nu este o abilitate, ci o atitudine. (Ralph Marston)"];
 
  document.getElementById("citat2").innerHTML = arr[Math.floor(Math.random() * arr.length)];
}

function myFunction(){
  console.log(1);
  var elem = document.getElementById("info");
  console.log(elem);
  var txt;
  cssObj = window.getComputedStyle(elem, null)

  for (i = 0; i < cssObj.length; i++) {
    cssObjProp = cssObj.item(i)
    txt += cssObjProp + " = " + cssObj.getPropertyValue(cssObjProp) + "<br>";
  }
  
  document.getElementById("demo").innerHTML = txt;
}

function functie(){let multime = document.getElementById("lista");
let element = multime.getElementsByTagName("li");
console.log(element);
for(var i = element.length-1; i >= 0; --i) {
  multime.appendChild(element[i]);
}
}

function cifre_arabe(){
  document.getElementById("lista").type="1";
  document.getElementById("litere_mici").checked = false;
  document.getElementById("litere_mari").checked = false;
  document.getElementById("cifre_r").checked = false;
}

function litere_mari(){
  document.getElementById("lista").type="A";
  document.getElementById("cifre_a").checked = false;
  document.getElementById("litere_mici").checked = false;
  document.getElementById("cifre_r").checked = false;
}

function litere_mici(){
  document.getElementById("lista").type="a";
  document.getElementById("cifre_a").checked = false;
  document.getElementById("litere_mari").checked = false;
  document.getElementById("cifre_r").checked = false;
  


}

function cifre_romane(){
  document.getElementById("lista").type="I";
  document.getElementById("cifre_a").checked = false;
  document.getElementById("litere_mari").checked = false;
  document.getElementById("litere_mici").checked = false;

}

function element_Meniu(){
  let meniu=document.querySelectorAll("a");
  for(var i =0;i<meniu.length;i++)
      if(window.location.href == meniu[i].href)
      {console.log(meniu[i]);
        meniu[i].className = "elementMeniu";}
   }





