// ## Zadanie 1
// Mamy tekst: `Koty to fajne zwierzaki`
// Wypisz w konsoli liczbę wyrazów w tym zdaniu.
{
    console.log("Koty to fajne zwierzaki".split(" ").length);
}
// ## Zadanie 2
// Za pomocą funkcji [Prompt()](https://developer.mozilla.org/pl/docs/Web/API/Window/prompt) pobierz
// od użytkownika jego imię. Następnie używając odpowiednich funkcji dla stringów wypisz w konsoli to imię
// tak by było pisane małymi literami a rozpoczynało się od dużej litery np.
//
// ```
// Witaj Piotr!
// ```
{
    let input = window.prompt("Input your first name");
    name = input.toLowerCase();
    let firstLetter = name.substr(0, 1).toUpperCase();
    let rest = name.substr(1);
    console.log(`'''' Witaj ${firstLetter}${rest}!''''`);
}
// ## Zadanie 3
// Mamy zmienną:
//     ```
// const text = "Ala ma kota";
// ```
// Sprawdź czy występuje w niej słowo `"kot"`. Jeżeli tak - wypisz w konsoli `"Zdanie zawiera słowo kot"`,
// w przeciwnym razie wypisz `"Zdanie nie zawiera słowa kot"`.
{
    const text = "Ala ma kota";

    if (text.includes("kot")) {
        console.log("Zdanie zawiera słowo kot");
    } else {
        console.log("Zdanie nie zawiera słowa kot");
    }
}
// ## Zadanie 4
// Mamy zmienną:
//     ```
// const text = "Ala ma kota";
// ```
// Wypisz ten tekst w konsoli:
//     - pisany małymi literami
// - pisany dużymi literami
// - pisany naprzemiennie dużymi i małymi literami
// - za pomocą metody [replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
// zamień imię Ala na twoje imię i wypisz wynik w konsoli
{
    const text = "Ala ma kota";

    console.log(text.toLowerCase());
    console.log(text.toUpperCase());
    let letters = [...text];
    for (let i = 0; i < letters.length; i++) {
        if (i % 2 === 0) {
            letters[i] = letters[i].toUpperCase();
        } else {
            letters[i] = letters[i].toLowerCase();
        }
    }
    let result = "";
    letters.forEach(letter => {
        result += letter;
    });
    console.log(result);
    console.log(text.replace("Ala", "Mateusz"));
}
// ## Zadanie 5
// Korzystając z obiektu Math stwórz kilka losowych zmiennych z zakresu 10-100000. Możesz skorzystać ze wzoru `Math.floor(Math.random()*(max-min+1)+min)`.
//     Po wygenerowaniu wypisz je w konsoli tak, by wszystkie kończyły się w jednym rzędzie. Przykładowo:
//
// ```
// .........10
// ........102
// ..........1
// .......1002
// ......92020
// ```
// Wykorzystaj tutaj funkcję [padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart).
// Zakładamy, że pojedyncza linia powinna mieć długość 10 znaków.

//Zrobiłem po swojemu bo nie skopiowałem ostatniej linijki zadania, pod spodem drugi sposób
{
    let tab = [];
    for (let i = 0; i < 10; i++) {
        tab.push((Math.floor(Math.random() * (100000 - 10 + 1) + 10)).toString());
    }
    tab.forEach(el => {
        let num = 9 - el.length;
        let str = "";
        for (let i = 0; i <= num; i++) {
            str = str.concat(".");
        }
        console.log(str + el);
    });
}
//Drugi sposób
{
    console.log("<---------------Drugi------------------->");

    let tab = [];
    for (let i = 0; i < 10; i++) {
        tab.push((Math.floor(Math.random() * (100000 - 10 + 1) + 10)).toString());
    }
    tab.forEach(el => {
        console.log(el.padStart(10, "."));
    });
}

// ## Zadanie 6
// Wygeneruj pod zmienną `uniqueID` tekst będący losowym ciągiem liter i cyfr o długości 20 znaków. Nie narzucam tutaj sposobu rozwiązania.
{
    function randomString(length) {
        let result = "";
        let characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    let uniqueId = randomString(20);
    console.log(uniqueId);
}

// ## Zadanie 7
// Stwórz zmienną `x` równą jakiejś wartości liczbowej. Następnie wypisz w konsoli tekst:
//
//     ```
// Liczba x * x da w wyniku x*x
// ```
//
// Gdzie w odpowiednie miejsca wstawisz zmienną x i wynik działania.
{
    let x = Math.floor(Math.random()*(1000-10+1)+10)
    console.log(`Liczba ${x} * ${x} da w wyniku ${x*x}`);
}
