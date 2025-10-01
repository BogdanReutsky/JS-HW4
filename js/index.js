const text = prompt("enter text")
const text2 = prompt("enter text")
if (text && text2){
    console.log("Обидва поля заповнені");
}else{console.log("Не всі поля заповнені");
}

const number =Number(prompt("enter number"))
const number2 =Number(prompt("enter number"))

if (number + number > 10){
    console.log("Сума більша за 10");
}else {
    console.log("Сума менша або дорівнює 10");
}

const test = prompt("enter text")

if (test.includes("JavaScript")){
    console.log("Текст містить слово JavaScript");
}else{
    console.log("Текст не містить слово JavaScript");
}

const randomNumber = Number(prompt("enter number"))

if (randomNumber > 10 && randomNumber < 20){
    console.log("входить в діапазон від 10 до 20");
}else{
    console.log("Число не входить в діапазон від 10 до 20");
}

const name = prompt("enter name")
const email = prompt("enter email")
const password = prompt("enter password")

if (name.length > 2 && email.includes("@") && password.length > 5){
    console.log("Перенаправлення на іншу сторінку");
}else{
    console.log("Помилка: неправильне заповнення");
}

