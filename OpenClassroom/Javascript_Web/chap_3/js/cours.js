let pythonElt = document.createElement("li");
let cElt = document.createElement("li");

cElt.id = "c";
cElt.textContent = "C";

pythonElt.id = "python";
pythonElt.textContent = "PYTHON";

document.getElementById("languages").appendChild(pythonElt);
document.getElementById("languages").innerHTML += '<li id="javascript">JAVASCRIPT</id>';

document.querySelector("h1").innerHTML += ' from Dev Universe';
document.getElementById("languages").replaceChild(cElt, document.getElementById("php"));

document.getElementById("content").innerHTML += 'En voici une ' +
    '<a href="https://fr.wikipedia.org/wiki/Liste_de_langages_de_programmation">liste</a> plus complète';