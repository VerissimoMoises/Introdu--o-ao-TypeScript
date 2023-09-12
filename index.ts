// Exemplo 1

class User {
    name: string;
    username: string;
    document: string;
}

const user: User = {
    name: "Moisés",
    username: "lomon",
    document: "33333333333"
}

// Exemplo 2

function soma(num1: number, num2: number){
    return num1 + num2;
}

console.log(soma(1, 2));
console.log(soma("1","2"));
console.log(soma(1));