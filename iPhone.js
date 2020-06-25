window.onload = function(){
  this.paragraf_dinamic();
  this.element_Meniu();
 
}

function append_paragraph(){
var x = document.createElement("p");
x.innerHTML="Apple are cel mai vast magazin online de aplicații pentru telefoane mobile din lume - App Store - cu peste 350.000 de aplicații, acestea înregistrând peste 10 miliarde de descărcări la nivel global. App Store atrage peste 30,5 milioane de download-uri de aplicații zilnic, echivalentul a circa 350 aplicații pe secundă. Prin comparație, magazinul similar al Nokia, Ovi, atrage circa 1,5 milioane descărcări în fiecare zi, echivalentul a 22 aplicații pe secundă.";
x.setAttribute('id',"p_adaugat");
document.getElementById("date").appendChild(x);
}

function remove_element(element_id){
var x=document.getElementById(element_id);
  x.parentNode.removeChild(x);
  
}

function change_cursor(element_id){
  document.getElementById(element_id).style.cursor="pointer";
  document.getElementById(element_id).style.textDecoration="underline";
  
}
 function modify_table(){
   document.getElementById("tabel").classList.add("mystyle");
 }
 function functie2(){
   document.getElementById("date").className="mystyle";
 }

 
 
let txt=["Bine","ai","venit","pe","site-ul","nostru!"];



function paragraf_dinamic() {
  if ( txt.length>0) {
    document.getElementById("paragraf3").innerHTML += txt.shift()+" ";
    setTimeout(paragraf_dinamic, 333);
  }
}


function element_Meniu(){
let meniu=document.querySelectorAll("a");
for(var i =0;i<meniu.length;i++)
    if(window.location.href == meniu[i].href)
    {console.log(meniu[i]);
      meniu[i].className = "elementMeniu";}
 }

