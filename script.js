'use strict';

let str = prompt('Введите строку');

const lexic = function (str) {
    if (typeof str === 'string') {
        if (!str) {
            return 'Пустая строка';
        }
        str = str.trim();
        if (str.length > 30) {
            str = str.slice(0, 30) + '...';
        }
        return str;
    } else {
        return 'Это не строка, а ' + typeof str;
    }
};

alert(lexic(str));