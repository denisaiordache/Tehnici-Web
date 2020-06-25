window.onload = function(){
    this.WelcomeUser();
    this.element_Meniu();
}

function change_background(){
    document.body.style.backgroundColor="black";
    document.body.style.color="white";

}



function img_mouseOver(x){
    x.style.height="100px";
    x.style.width="100px";
}

function img_mouseOut(x){
    x.style.height="40%";
    x.style.width="20%";
}

function change(){
    document.body.style.backgroundColor="#A9A9A9";
    document.body.style.color="black";

}
function b(){
    document.getElementById("container").style.backgroundColor='pink';
}


function function1(){
    document.getElementById("scroll").style.top='30px';
    document.getElementById("scrol").style.transition='0.5s';
    
    
   
}

function function2(){
    document.getElementById("scroll").style.top='8px';
    document.getElementById("scrol").style.transition='0.5s';
    
}

function quotes(){
    var arr = ["Nimic nu valoreaza mai mult decat ziua de azi. (Goethe)","Cat despre mine, sunt un optimist. Nu-mi pare de mare folos sa fiu altfel. (Winston Churchill)","Te-ai nascut sa fii un invingator dar pentru asta, trebuie sa planuiesti sa castigi, sa te pregatesti sa castigi si sa te astepti sa castigi. (Zig Ziglar)","Excelența nu este o abilitate, ci o atitudine. (Ralph Marston)"];
   
    document.getElementById("citat").innerHTML = arr[Math.floor(Math.random() * arr.length)];
  
  }
  
let NumeOriginal = document.getElementsByTagName("title")[0].innerHTML;


function WelcomeUser(){
    var nume = prompt("Cum te numesti?","Introdu-ti numele");
    if(nume!=null)
    {
        document.title = "Salut," + nume +"!";
        setTimeout(()=>{document.title = NumeOriginal;},2000);
    }
   
    

}

function element_Meniu(){
    let meniu=document.querySelectorAll("a");
    for(var i =0;i<meniu.length;i++)
        if(window.location.href == meniu[i].href)
        {console.log(meniu[i]);
          meniu[i].className = "elementMeniu";}
     }