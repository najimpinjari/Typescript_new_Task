//Interface

interface Person {
    name: string;
    age: number;
}

const peper: Person = {
    name: "Najim",
    age: 25
};

console.log(peper);
 

interface person1 {
    name : string ,
    age? : number ;
}

let pers : person1 = {
    name : "najim dp "
};

console.log(pers);

const pers2 : person1 ={
    name : "arbaz",
    age : 23
};

console.log(pers2);


interface Person {
    readonly id: number;
    name: string;
}

interface person{
    readonly id : number ,
    name : string ;
}

const persone: person = {
    id: 1,
    name: "Najim"
};

// person.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

console.log(persone);

interface newperson extends person {
    position : string 
};

const newpersonnew : newperson = {
    id : 1,
    name : "njaim",
    position : "Software Developer"
};

console.log(newpersonnew);

interface Greet {
    (name: string): string;
}

const greet: Greet = (name: string) => {
    return `Hello, ${name}!`;
};

console.log(greet("Najim"));  // आउटपुट: Hello, Najim!
