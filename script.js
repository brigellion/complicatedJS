'use strict';

const lexic = function (str) {
    if (typeof str === 'string') {
        str = str.trim();
        if (str.length > 30) {
            str = str.slice(0, 30) + '...';
        }
        alert(str);
    } else {
        alert('Это не строка');
    }
};
