let pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "100px";
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

let paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[0].style.color);
console.log(paragraphesElts[1].style.color);