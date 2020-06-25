window.onload = function(){
    this.changeTitle();
    this.element_Meniu();
}
function modify_textarea(){
    var x = document.getElementById("textarea");
    x.value="iPad-urile sunt fabricate de compania taiwaneză Foxconn. Între timp și alți producători au scos pe piață calculatoare portabile de același gen, de tip constructiv „tabletă”, care fac concurență lui iPad. La 11 martie 2011 compania Apple a scos pe piața americană modelul iPad 2, mai subțire, mai ușor și cu posibilități mai numeroase. Încă în prima zi au fost vândute mai mult de 300.000 de exemplare. Alte 25 de țări l-au pus în vânzare la 25 martie 2011. Producția viitoare ar putea fi afectată de Cutremurul din Tōhoku (2011), (Japonia), care a lovit și compania Toshiba, furnizoarea de memorie pentru iPad.";
    alert("Continutul casetei text a fost modificat.")
}

function openWin() {
    myWindow = window.open("https://tablet-pc.compari.ro/apple/ipad-air-3-2019-10-5-64gb-p458176344/?gclid=EAIaIQobChMIyMCX_NOY6QIVlZAYCh3HRQsmEAAYAyAAEgKmY_D_BwE#descrierea-produsului", "_blank", "width=500, height=500");
}

var myP = document.getElementById("myP");
var myDiv = document.getElementById("myDiv");
var myP2 = document.getElementById("myP2");
var myDiv2 = document.getElementById("myDiv2");

myP.addEventListener("click", function(){ myDiv.style.background = "red" });



myP.addEventListener("click", changeText, true);

myDiv.addEventListener("click", changeText2, true);

myDiv.addEventListener("mouseover", function(){ myDiv2.style.background = "ivory" });

function changeText() {
    myP2.textContent = myP2.textContent += "„Noul iPad a fost construit pentru a rula iPadOS, care introduce noi moduri puternice de a opera multitask, de a gestiona și de a marca documente, de a folosi Apple Pencil și de a vizualiza mai multe informații dintr-o privire pe un ecran de home reproiectat. Acest nou iPad cu iPadOS ia tot ceea ce oamenii iubesc în legătură cu cel mai popular iPad și îl face și mai bun pentru a crea, învăța, lucra și a se juca.” "
};

function changeText2() {
    myP2.textContent = myP2.textContent += "In plus: "
};

myP.removeEventListener("click", changeText, false);

function modify_color(){
   document.getElementsByClassName("column").classList.add("mystyle");
   console.log(1);

}




let titlu = document.title;
let lungime = titlu.length;
let titlu2 = []
for (let i=0;i<lungime;i++)
    titlu2.push(" "); ///cream un vector cu spatii de lungime egala cu lungimea titlului

var index = 0;

function changeTitle(){
    if(index<=titlu.length/2){
        titlu2[index] = titlu[index];
        titlu2[lungime-index-1] = titlu[lungime-index-1];
        let x = titlu2.toString();
        let str1 = "";
        for(let j=0;j<x.length;j=j+2)
            str1+=x[j];
        document.querySelector("h1").innerHTML = str1;
        index++;
        setTimeout(changeTitle,1000);

    }


}

function element_Meniu(){
    let meniu=document.querySelectorAll("a");
    for(var i =0;i<meniu.length;i++)
        if(window.location.href == meniu[i].href)
        {console.log(meniu[i]);
          meniu[i].className = "elementMeniu";}
     }
