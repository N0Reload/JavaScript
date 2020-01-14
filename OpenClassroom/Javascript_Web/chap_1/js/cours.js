let h = document.head;
console.log(h);

let b = document.body;
console.log(b);

// Affiche les noeuds enfant du noeud body
for (let i = 0; i < document.body.childNodes.length; i++)
    console.log(document.body.childNodes[i]);