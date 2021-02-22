// ## Zadanie 1
// Wypisz ile miast jest w Polsce
{
    console.log(`Ilość miast w polsce: ${cities.length}`);
}

// ## Zadanie 2
// Wypisz ile jest ludzi w tych miastach
//w każdym mieście:
{
    cities.forEach(el=>{
        console.log(`liczba ludzi w ${el.name} to ${el.people}`);
    });
}

//we wszystkich miastach razem:
{
    console.log(cities.reduce(function (a, b) {
        return a + b.people;
    }, 0));
}

// ## Zadanie 3
// Wypisz pierwsze miasto, w którym jest ponad 10000 ludzi
{
    console.log(cities.find(function (a) {
        return a.people > 10000;
    }));
}

// ## Zadanie 4
// Wypisz miasta, w których ludzi jest ponad średnią
{
    let avg =
        (cities.reduce(function (a, b) {
            return a + b.people;
        }, 0)) / cities.length;
    let tab = cities.filter(function (el) {
        return el.people > avg;
    });
    tab.forEach(el=>{
        console.log(el.name);
    })
}

// ## Zadanie 5
// Wypisz nazwy wszystkich miast, w których jest ponad 10000 ludzi
{
    let tab = cities.filter(function (el) {
        return el.people > 10000;
    });
    tab.forEach(el=>{
        console.log(el.name);
    })

}

// ## Zadanie 6
// Wypisz czy więcej jest miast z > 10000 ludzi czy mniejszych
{
    let bigCities = cities.filter(function (el) {
    return el.people > 10000;
}).length;
    let smalCities = cities.filter(function (el) {
        return el.people <= 10000;
    }).length;
console.log(bigCities>smalCities ? `Większych miast jest więcej` : `Mniejszych miast jest więcej`);
}
