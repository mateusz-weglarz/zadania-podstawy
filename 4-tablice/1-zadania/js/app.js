// ## Zadanie 1
// Zadeklaruj tablicę `tab` z 5 losowymi wyrazami. Wypisz w konsoli tą tablicę i jej długość.
// Następnie wypisz pierwszy i ostatni element oraz ich długość.
// Robiąc pętlę po powyższej tablicy wypisz każdy element dużymi literami oraz jego długość. Skorzystaj z pętli `for`, `for of` i `forEach`.
{
    let tab = ["to", "jest", "losowy", "wyraz", "tablicy"];
    console.log(tab[0]);
    console.log(tab[0].length);
    console.log(tab[4]);
    console.log(tab[4].length);

    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i].toUpperCase());
        console.log(tab[i].length);
    }
    ;
    for (let el of tab) {
        console.log(el.toUpperCase());
        console.log(el.length);
    }
    ;
    tab.forEach(el => {
        console.log(el.toUpperCase());
        console.log(el.length);
    });
}

// ## Zadanie 2
// Do tabeli z 1 zadania dodaj na końcu i początku po 1 nowym elemencie.
//     Wykorzystaj odpowiednie metody. Po dodaniu elementów wypisz długość tablicy oraz całą tablicę za pomocą `console.table()`

{
    let tab = ["to", "jest", "losowy", "wyraz", "tablicy"];
    console.log(tab.push("nowy2"));
    console.log(tab.unshift("nowy"));
    console.log(tab);

}

// ## Zadanie 3
// Usuń z tablicy 3 element ale tylko wtedy gdy ma ona tyle elementów.
{
    let tab = ["to", "jest", "losowy", "wyraz", "tablicy"];
    if (tab.length > 2) {
        tab.splice(2, 1);
    }
    console.log(tab);
}

// ## Zadanie 4
// Mamy tablicę:
//
//     ```
// const names = [
//     "Marcin",
//     "Ania",
//     "Monika",
//     "Piotrek",
//     "Beata"
// ]
// ```
// Posortuj ją i wypisz w konsoli.
{
    const names = [
        "Marcin",
        "Ania",
        "Monika",
        "Piotrek",
        "Beata"
    ]
    console.log(names.sort());
}

// ## Zadanie 5
// Mamy tablicę:
//
//     ```
// const tab = [
//     "xloremipsumdolor",
//     "kloremipsum",
//     "aloremipsumdol",
//     "blor",
//     "cloremipsu",
//     "gloremip",
// ]
// ```
//
// Posortuj ją po długościach kolejnych elementów. Na początku powinien być najkrótszy tekst, na końcu najdłuższy. Następnie napisz, ile liter mają wszystkie elementy razem.

{
    const tab = [
        "xloremipsumdolor",
        "kloremipsum",
        "aloremipsumdol",
        "blor",
        "cloremipsu",
        "gloremip",
    ];

    console.log(tab.sort((a, b) => {
        return a.length - b.length
    }));
}

// ## Zadanie 6
// Mamy tablicę:
//
//     ```
// const tabUsers = [
//     {name : "Marcin", age: 14},
//     {name : "Piotr", age: 18},
//     {name : "Agnieszka", age: 13},
//     {name : "Weronika", age: 20}
// ]
// ```
//
// Za pomocą dowolnej pętli wypisz w konsoli imiona użytkowników, którzy są pełnoletni.
//     Dodatkowe - spróbuj zrobić to zadanie także za pomocą odpowiedniej do tego celu funkcji.

{
    const tabUsers = [
        {name: "Marcin", age: 14},
        {name: "Piotr", age: 18},
        {name: "Agnieszka", age: 13},
        {name: "Weronika", age: 20}
    ];

    tabUsers.forEach(el => {
        el.age >= 18 ? console.log(el.name) : el.name;
    });
    //Dodatkowe funkcja filter?? jeśli nie to jaka?
    let tab1 = tabUsers.filter(function (el) {
        return el.age >= 18;
    });
    tab1.forEach(el => {
        console.log(el.name);
    })
}


// ## Zadanie 7
// Napisz funkcję `checkPalindrom(txt)`, która zwróci true/false w zależności od tego, czy przekazane słowo jest palindromem.

{
    function checkPalindrom(txt) {
        let tab = [...txt];
        let tab1 = [...txt];
        let count = 0;
        tab.reverse();
        for (let i = 0; i < tab.length; i++) {
            if (tab[i] === tab1[i]) {
                count++;
            }
        }
        return count === tab.length;
    }

    console.log(checkPalindrom("zkajakz"));
}

// ## Zadanie 8
// Napisz funkcję, która zwróci losową liczbę z przedziału min-max.

function losNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(losNum(10, 15));

// ## Zadanie 9
// Napisz funkcję `generateRandomTable(min, max, count)`, która zwróci tablicę o długości `count`,
//     w której będą losowe liczby z zakresu min-max. Do losowania liczb wykorzystaj funkcję z poprzedniego zadania.
//     Wynik odpalenia funkcji podstaw po zmienną, a następnie wypisz ją w konsoli. Następnie wypisz w konsoli największą liczbę w tej tablicy.
{
    function generateRandomTable(min, max, count) {
        let tab = [];
        for (let i = 0;i<count;i++){
            tab[i] = losNum(min,max);
        }
        return tab;
    }
    let result = generateRandomTable(1,20,10);
    console.log(result);
   result.sort((a,b)=>{
       return a-b;
   });
   console.log(result[result.length-1]);
}

// ## Zadanie 10
// Stwórz funkcję `monthName(nr)`, która będzie przyjmować tylko jeden atrybut - numer miesiąca.
// Funkcja powinna sprawdzić czy numer miesiąca jest prawidłowy (1-12). Jeżeli tak jest powinna zwrócić nazwę miesiąca w języku polskim.
// Wykorzystaj tutaj tablicę.
//
//     Dla przykładu:
//     `monthName(10) -> "październik"`

{
    const months = ["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"];
    function monthName(nr){
        if (nr>0&&nr<13){
            console.log(months[nr-1]);
        }else {
            console.log(`Nieprawidłowy numer`);
        }
    }

    monthName(12);
    monthName(13);
    monthName(1);
}

