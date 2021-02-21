
// ## Zadanie 1
// Zamień na funkcje strzałkową poniższe funkcje:


const sum =(a, b) => {
    const result = a + b;
    console.log(result);
}
sum(2,3);

const myPow = (a,b) => {
    return Math.pow(a,b);
}
console.log(myPow(2, 4));


const hr = ()=> {
    console.log("-------");
}
hr();

const bigWords = (tab)=> {
    const result = [];
    for (let i=0; i<tab.length; i++) {
        result.push(tab[i].toUpperCase());
    }
    return result;
}
console.log(bigWords(["slowa", "malymi", "literami"]));


const sumTab = (tab) =>  {
    let sum = 0;
    for (let i=0; i<tab.length; i++) {
        sum += tab[i];
    }
    return sum;
}

console.log(sumTab([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const test = ()=> {
    return "abecadło z pieca spadło";
}
console.log(test());

const nearEnd = ()=> {
    console.log("Prawie koniec");
};
nearEnd();


const findFirst = (arr, name) => {
    let math = undefined;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            math = arr[i];
            break;
        }
    }
    return math;
}

