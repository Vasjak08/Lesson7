

//Задача 0
/*let S1 = a + 12 + b;
console.log(`S1 = ${S1}`);

let S2 = parseFloat Math.sqrt((a + b) / (2 * a));
console.log(`S2 = ${S2}`);

let S3 = Math.cbrt((a + b) / c);
console.log(`S3 = ${S3}`);

let S4 = Math.sin(a / (-b));
console.log(`S4 = ${S4}`);




//Задача 2

//Вводимо дані
/*const userBirthDay = parseFloat(prompt('Добавте ваш рік народження', "1980"))
//Знайдемо резльтат
const yearNew = new Date()
let currentDate = yearNew.getFullYear()
let yearOld = yearNew - currentDate;

//Резльтат
console.log(`Вам=${yearOld}`);*/

//const userBirthDay = parseFloat(prompt('Добавте ваш рік народження', "1980"))
let birth = new Date(1980);

const year = birth.getFullYear();

let today = new Date();


console.log(today.getFullYear() - birth - (today.getTime() < birth.setFullYear(year)))

//Задача 3
//Вводимо дані
let goodPrice = parseFloat('Вартість товару', 0);
let goodNumber = parseInt('Вартість товару', 1);
//Знайдемо резльтат
let gootValue = goodPrice * goodNumber;
console.log(`Загальна вартість-${gootValue}`);
let goodPhd = gootValue / 0.05;
console.log(`Пдв - ${goodPhd}`);


//Задача 4
//Вводимо дані
let heightSm = parseInt(prompt('Довжина в сантиметрах', '160'));
//Знайдемо резльтат
let heightMeter = heightSm / 100;
let heightKilometr = heightSm / 10000;
//Резльтат
console.log(`Метри - ${heightMeter}`);
console.log(`Кілометри - ${heightKilometr}`);


//Задача 5
//Вводимо дані
let numberSeconds = parseFloat(prompt('Кількість секунд', '3600'));
//Знайдемо резльтат
let numberHours = Math.floor((numberSeconds / 3600) % 60);
let numberMinutes = Math.floor(numberSeconds / 60);

//Резльтат
console.log(`Хвилин - ${numberMinutes}`);
console.log(`Годин - ${numberHours}`);

//Задача 6
//Вводимо дані
let price = tovar;
let quantity = 3;
let quantityPrice = quantity / price;
quantityPrice






//Задача 7

let randomMonth = Math.floor(Math.random() * 12) + 1;
let randomDay = Math.floor(Math.random() * (6 - 0 + 1));
let result = randomMonth + randomDay;
console.log(`Номер місяця - ${randomMonth} <br>
   Номер дня - ${randomMonth} <br>
   Сума-${result}`);

