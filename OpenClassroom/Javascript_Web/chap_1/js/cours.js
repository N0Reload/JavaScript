let h = document.head;
console.log(h);

let b = document.body;
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE)
    console.log("body est un noeud element");
else
    console.log("body est un noeud textuel");

for(let i = 0; i < document.body.childNodes.length; i++)
    console.log(document.body.childNodes[i]);
