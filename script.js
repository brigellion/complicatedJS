'use strict';

let lang = 'ru',
    namePerson = 'Александр';

const ruWeek = "Пн Вт Ср Чт Пт Сб Вс",
    enWeek = "Su Mo Tu We Th Fr Sa";

const arr = new Map([
    ['ru', 'Пн Вт Ср Чт Пт Сб Вс'],
    ['en', 'Su Mo Tu We Th Fr Sa']
]);
//a пункт задания 1
if (lang == 'ru') {
    console.log(ruWeek);
} else if (lang == 'en') {
    console.log(enWeek);
}
//b пункт задания 1
switch (true) {
    case lang == 'ru':
        console.log(ruWeek);
        break;
    case lang == 'en':
        console.log(enWeek);
        break;
}
//c пункт задания 1
console.log(arr.get(lang));

//2 задание
let grade = namePerson == 'Александр' ? 'преподаватель' : namePerson == 'Артем' ? 'директор' : 'студент';
console.log(grade);