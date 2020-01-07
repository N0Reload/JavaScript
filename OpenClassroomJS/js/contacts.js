/* 
Activité : gestion des contacts
*/

class Contact
    {
        constructor(firstName, secondName)
        {
            this.firstName = firstName;
            this.secondName = secondName;
        }
        decrire ()
        {
            return `Nom : ${this.firstName}, Prénom ${this.secondName}`;
        };
        exit_program ()
        {
            return "quit";
        };
    }

const carole = new Contact("Levisse", "Carole");
const melodie = new Contact("Nelsonne", "Melodie");

const tab = [carole, melodie];

let choice;

function sayOptions ()
{
    console.log("\nBienvenue dans le gestionnaire des contacts !");
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter\n");
}

sayOptions();

while (choice !== "quit")
{
    choice = prompt("choisissez une option :");
    if (choice === "1")
    {
        console.log("Voici la liste de tous vos contacts :");
        for (let i = 0; i < tab.length; i++)
            console.log(tab[i].decrire());
        sayOptions();
    }
    else if (choice === "2")
    {
        const newContact = new Contact(prompt("Entrez le nom du contact"), prompt("Entrez le Prenom du contact"));
        tab.push(newContact);
        console.log("Le nouveau contact a été ajouté");
        sayOptions();
    }
    else if (choice === "0")
    {
        console.log("Bonne journée :D, rechargez la page pour relancer le programme <3");
        choice = "quit";
    }
}

// TODO : complétez le programme