let colorFond = prompt("What color for font ?");
let colorText = prompt("What color for text ?");

let divElts = document.getElementsByTagName("div");
for (let i = 0; i <= divElts.length; i++)
{
    divElts[i].style.color = colorText;
    divElts[i].style.backgroundColor = colorFond;
}