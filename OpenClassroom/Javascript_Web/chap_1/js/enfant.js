function showChild(node, index)
{
    if (node.nodeType === document.ELEMENT_NODE)
    {
        if (index >= 0 && index <= node.childNodes.length)
            console.log(node.childNodes[index]);
        else
            console.error("Total of childNodes = " + node.childNodes.length + " you asked " + index);
    }
    else
        console.error("Incorrect type of Node");
}

showChild(document.body, 1);

showChild(document.body, -1);

showChild(document.body, 8);

showChild(document.body.childNodes[0],0);