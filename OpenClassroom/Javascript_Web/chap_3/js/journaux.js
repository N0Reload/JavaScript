let journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

for (let i = 0; i <= journaux.length; i++)
{
    let linkElt = document.createElement("a");
    linkElt.textContent = journaux[i];
    linkElt.href = journaux[i];

    document.getElementById("contenu").appendChild(linkElt);
    document.getElementById("contenu").innerHTML += "</br>";
}