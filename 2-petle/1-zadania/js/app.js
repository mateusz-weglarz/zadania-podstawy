// ## Zadanie 1
// Za pomocą pętli wypisz w konsoli tekst `12345678910`
{
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// ## Zadanie 2
// Stwórz zmienną `n`, pod którą postawisz jakąś liczbę całkowitą z przedziału 1-10 oraz dodatkową zmienną `txt`, która będzie zawierać jakiś tekst np. `kot`.
//
//     Sprawdź czy liczba `n` jest dodatnia. Jeżeli jest wypisz w konsoli tekst, który będzie powtórzeniem `n` razy tekstu ze zmiennej `txt`. Przykładowo:
//
// ```
// input -> "kot";
// n -> 3
// wynik -> "kotkotkot";
// ```
//
// Powtórzenie tekstu wygeneruj za pomocą pętli. Po uzyskaniu efektu, powtórzenie wygeneruj za pomocą metody [repeat()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/String/repeat) dla stringów.

{
    //pierwszy sposób
    let n = 6;
    let txt = "kot";
    let str = "";
    if (n % 2 === 0) {
        for (let i = 0; i < n; i++) {
            str += txt;
        }
        console.log(str);
    }
//    za pomocą repeat
    if (n % 2 === 0) {
        console.log(txt.repeat(n));
    }
}

// ## Zadanie 3
// Wygeneruj i wypisz w konsoli tekst:
//
//     ```
// ╔═══════════════════════╗
// ║  To jest jakiś tekst  ║
// ╚═══════════════════════╝
// ```
//
// Tekst w ramce powinien być postawiony pod zmienną, tak by łatwo można było go zmienić.
// Narożniki wygeneruj po prostu kopiując odpowiedni znaki z powyższego przykładu.
//
// Rozbuduj to zadanie tak, by tekst był podawany przez użytkownika za pomocą
// [Prompt()](https://developer.mozilla.org/pl/docs/Web/API/Window/prompt). Jeżeli tekst jest dłuższy od 20 znaków,
// wyświetl tylko 20 i pokaż `...`. Przycięcie możesz dokonać za pomocą
// [Slice()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/String/slice)

{
    //tekst pod zmienną
    let txt = "To jest jakiś tekst";
    let num = 0;
    let num1 = 0;
    let num2 = 0;
    let str1 = "";
    let str2 = "";
    console.log(`╔═══════════════════════╗`);
    if (txt.length < 23) {
        num = 23 - txt.length;
        num1 = Math.floor(num / 2);
        num2 = Math.ceil(num / 2);
        for (let i = 0; i < num1; i++) {
            str1 = str1.concat(" ");
        }
        for (let i = 0; i < num2; i++) {
            str2 = str2.concat(" ");
        }

        console.log(`║${str1}${txt}${str2}║`);
    } else if (txt.length === 23) {
        console.log(`║${txt}║`);
    } else {
        let txt1 = txt.substr(0, 23);
        console.log(`║${txt1}║`);
    }
    console.log(`╚═══════════════════════╝`);

    //tekst od uytkownika
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;
    let str3 = "";
    let str4 = "";
    let text = window.prompt("Wprowadź tekst");
    let text1 = "";
    if (text === null) {
        console.log(`Nie podałeś tekstu`);
    } else {
        console.log(`╔═══════════════════════╗`);
        if (text.length < 21) {
            num3 = 23 - text.length;
            num4 = Math.floor(num3 / 2);
            num5 = Math.ceil(num3 / 2);
            for (let i = 0; i < num4; i++) {
                str3 = str3.concat(" ");
            }
            for (let i = 0; i < num5; i++) {
                str4 = str4.concat(" ");
            }

            console.log(`║${str3}${text}${str4}║`);
        } else {
            text1 = text.slice(0, (20 - text.length));
            console.log(`║${text1}...║`);
        }
        console.log(`╚═══════════════════════╝`);
    }
}

// ## Zadanie 4
// Zrób losowanie 10 liczb z przedziału 1-10. Wypisz je w konsoli. Jeżeli przynajmniej połowa z nich jest większa niż 5,
// wtedy w konsoli wypisz tekst `udało się`, w przeciwnym razie wypisz w konsoli tekst `niestety nie tym razem`.
{
    let tab = [];
    let count = 0;
    let num = 0;
    for (let i = 0; i < 10; i++) {
        num = (Math.floor(Math.random() * (10) + 1))
        tab.push(num.toString());
        if (num > 5) {
            count++;
        }
    }
    tab.forEach(el => {
        console.log(el);
    });
    if (count >= 5) {
        console.log(`Udało się.`);
    } else {
        console.log(`Niestety nie tym razem.`);
    }

}

// ## Zadanie 5
// Za pomocą pętli wygeneruj poniższy tekst:
//
//     `01-2--3---4----5-----6------7-------`
//
// Zadanie wykonaj dla zmiennej równej `n=7`

{
    let n = 7;
    let str = "";
    for (let i = 0; i <= n; i++) {
        let str1 = "";
        for (let j = 0; j < i; j++) {
            str1 = str1.concat("-")
        }
        str = str.concat(`${i}${str1}`);
    }
    console.log(str);
}


// ## Zadanie 6
// Mamy dwie zmienne:
//     ```
// const min = 1;
// const max = 1000;
// ```
// Za pomocą `prompt()` pobierz od użytkownika liczbę z przedziału min-max. Pamiętaj, że prompt() zwraca zawsze tekst, więc skonwertuj ją na liczbę.
//
//     Robiąc pętlę while generuj losową liczbę z przedziału min-max.
//     Wypisz w konsoli ile wykonało się iteracji, aż wylosowana liczba była równa tej, którą podał użytkownik.

{
    const min = 1;
    const max = 1000;
    let count = 0;
    let userNumber = parseInt(window.prompt(`Podaj liczbę z zakresu od ${min} do ${max}`));
    if (userNumber >= min && userNumber <= max) {
        while (Math.floor(Math.random() * (max - min + 1) + min) !== userNumber) {
            count++;
        }
        ;
        console.log(`Liczba iteracji: ${count}`);
    } else {
        console.log(`Podałeś liczbę z poza zakresu od ${min} do ${max}`);
    }
}