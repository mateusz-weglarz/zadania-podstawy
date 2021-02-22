// ## Zadanie 1
// Wypisz wszystkie nazwy państw.
//     Jak już wypiszesz albo to zadanie zakomentuj (bo będziesz miał bałagan w konsoli),
// albo obejmij poleceniami `console.groupCollapsed("Nazwy państw");` i `console.groupEnd();`, albo po kodzie zastosuj `console.clear()`
// Wypisz ile jest razem ludności we wszystkich państwach
{
    console.groupCollapsed("Nazwy państw");
    countries.forEach(el => {
        console.log(el.name);
    })
    console.groupEnd();

    console.log(countries.reduce(function (a, b) {
        return a + b.population;
    }, 0));
}


// ## Zadanie 2
// Wypisz średnią ludność w państwach
{
    console.log("Średnia ludność państwa: " + ((countries.reduce(function (a, b) {
        return a + b.population;
    }, 0)) / countries.length).toFixed(2));
}


// ## Zadanie 3
// Wypisz ile jest państw, które mają dodatni wzrost
{
    console.log(countries.filter(function (el) {
        return el.grow > 0
    }).length);
}


// ## Zadanie 4
// Wypisz ile jest państw, które mają ujemny wzrost
{
    console.log(countries.filter(function (el) {
        return el.grow < 0
    }).length);
}


// ## Zadanie 5
// Napisz ile wszystkie państwa zajmują procent powierzchni Ziemi (world_area)
{
    console.log("Procent powierzchni zajmowany przez państwa: " + countries.reduce(function (a, b) {
        return a + b.world_area_in_percent;
    }, 0).toFixed(2));
}


// ## Zadanie 6
// Napisz ile wynosi średnia dzietności na świecie (fertility_rate) (uwaga - niektóre kraje nie mają danych - wtedy jest null)
{
    let count = 0;
    let avg = countries.reduce(function (a, b) {
        if (b.fertility_rate !== "null") {
            count++;
            return a + b.fertility_rate;
        }
    }, 0) / count
    console.log("Średnia dzietności na świecie: " + avg.toFixed(4));
}


// ## Zadanie 7
// Napisz ile wynosi średnia wieku na świecie
{
    console.log("Średnia wieku na świecie: " + (countries.reduce(function (a, b) {
        return a + b.medium_age
    }, 0) / countries.length).toFixed(1));
}


// ## Zadanie 8
// Wypisz wszystkie dane na temat Polski
{
    console.groupCollapsed("Dane na temat Polski");
    console.log(countries.find(el => {
        return el.name === "Poland"
    }));
    console.groupEnd();
}


// ## Zadanie 9
// Napisz czy średnia wieku w Polsce jest większa od średniej na Świecie?
{
    let avgWorld = countries.reduce(function (a, b) {
        return a + b.medium_age
    }, 0) / countries.length
    if ((countries.find(el => {
        return el.name === "Poland"
    }).medium_age) > avgWorld) {
        console.log(`średnia wieku w Polsce jest większa od średniej na Świecie`);
    }else {
        console.log(`średnia wieku w Polsce jest mniejsza od średniej na Świecie`);
    }
}

