// ## Zadanie 1
// Wypisz imiona i nazwiska użytkowników oraz ich email np.
//
//     ```
// Claire Lucas -> clairelucas@memora.com
// ```
{
    users.forEach(el => {
        console.log(`${el.name} -> ${el.email}`);
    })
}

// ## Zadanie 2
// Wypisz tablicę z wszystkimi użytkownikami pełnoletnimi
{
    let tab = [];
    users.forEach(el => {
        if (el.age >= 18) {
            tab.push(el);
        }
    });
    console.log(tab);
}

// ## Zadanie 3
// Wypisz tablicę z wszystkimi kobietami
{
    let tab = [];
    users.forEach(el => {
        if (el.gender === "female") {
            tab.push(el);
        }
    });
    console.log(tab);
}

// ## Zadanie 4
// Wypisz tablicę użytkowników którzy mają tag "dolor"
{
    let tab = [];
    users.forEach(el => {
        if (el.tags.includes("dolor")) {
            tab.push(el);
        }
    });
    console.log(tab);
}

// ## Zadanie 5
// Wypisz true/false w zależności od tego czy wszyscy użytkownicy są pełnoletni
{
    console.log(users.every(function (el) {
        return el.age >= 18;
    }));
}

// ## Zadanie 6
// Wypisz true/false w zależności od tego czy chociaż jeden z użytkowników jest pełnoletni
{
    console.log(users.some(function (el) {
        return el.age >= 18;
    }));
}


// ## Zadanie 7
// Wypisz nową tablicę zawierającą tylko imiona użytkowników które będą pisane dużymi literami
{
    let tab = [];
    users.forEach(el => {
        tab.push(el.name.toUpperCase());
    });
    console.log(tab);
}

// ## Zadanie 8
// Wypisz liczbę kobiet i liczbę mężczyzn
// Wypisz tekst która grupa jest liczniejsza (np. "kobiety wygrywają")

{
    let countMen = 0;
    let countWomen = 0;
    users.forEach(el => {
        if(el.gender==="female"){
            countWomen++
        }
        else if (el.gender==="male"){
            countMen++
        }
    });
    if(countMen>countWomen){
        console.log(`mężczyźni wygrywają`);
    }
    else if (countWomen>countMen){
        console.log(`kobiety wygrywają`);
    }
    else{
        console.log(`remis`);
    }
}