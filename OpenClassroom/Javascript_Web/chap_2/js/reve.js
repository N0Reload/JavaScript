function compterElements(str)
{
    return document.querySelectorAll(str).length;
}

console.log(compterElements("p"));
console.log(compterElements(".adjectif"));
console.log(compterElements("p .adjectif"));
console.log(compterElements("p > .adjectif"));