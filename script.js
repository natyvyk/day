//Základní validace (vyreseno)
/*
console.log(validator.isEmail("naty.vykoukalova@gmail.com"))
console.log(validator.isCreditCard("4125010001000208"))

const email = prompt("Zadejte email:")
const elOdstavec = document.querySelector("p")


if (validator.isEmail(email)) {
    elOdstavec.textContent = "Email je v pořádku."
    elOdstavec.classList.add("msg--valid")
} else {
    elOdstavec.textContent= "Neplatný email."
    elOdstavec.classList.add("msg--invalid")
}
*/


//Mimozemský život
const theDay = dayjs("01-12-2024", "DD-MM-YYYY")
const today = dayjs().format("DD-MM.YYYY")


if (today === theDay) {
        document.body.innerHTML += `<h1> ${"Today is the day!!".toUpperCase()} </h1>`
} else {
    document.body.innerHTML += `<h1>${"Wait for a bit more<3".toUpperCase()} </h1>`
}

/* Funkce
const ahoj = (jmeno, idZamestnance) => {
    console.log(`Ahoj uzivateli ${jmeno} - ${idZamestnance}`)
}

const nasobeni = (cislo1, cislo2) => {
    return cislo1 * cislo2
}

const spravneTelCislo = (tel) => {
    if(validator.isMobilePhone(tel, "cs-CZ")) {
        return true
    } else {
        return false
    }
}

ahoj("Michal", 123)
ahoj("Jana", 12)
ahoj("Erik", 3)
ahoj("Lucie", 1234)

console.log(nasobeni(10, 10))
console.log(spravneTelCislo("123456789"))
*/