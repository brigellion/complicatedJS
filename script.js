'use strict';

const dateTime = document.getElementById('dateTime');
const today = document.getElementById('today');

const calendar = () => {
    const showDay = (day) => {
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[day];
    };
    const showMonth = (month) => {
        const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентярбря', 'Октября', 'Ноября', 'Декабря'];
        return months[month];
    };
    const getZero = (num) => {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    };
    const showHours = (hours) => {
        if (hours > 10 && hours < 20) {
            return hours + ' часов';
        }
        switch (hours % 10) {
            case 1:
                return hours + ' час';
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                return hours + ' часов';
            case 2:
            case 3:
            case 4:
                return hours + ' часа';
        }
    };
    const showMinutes = (minutes) => {
        if (minutes > 10 && minutes < 20) {
            return minutes + ' минут';
        }
        switch (minutes % 10) {
            case 1:
                return minutes + ' минута';
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                return minutes + ' минут';
            case 2:
            case 3:
            case 4:
                return minutes + ' минуты';
        }
    };
    const showSeconds = (seconds) => {
        if (seconds > 10 && seconds < 20) {
            return seconds + ' секунд';
        }
        switch (seconds % 10) {
            case 1:
                return seconds + ' секунда';
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                return seconds + ' секунд';
            case 2:
            case 3:
            case 4:
                return seconds + ' секунды';
        }
    };

    const getValues = () => {
        let today = showDay(new Date().getDay());
        let month = showMonth(new Date().getMonth());
        let year = new Date().getFullYear();
        let hour = showHours(new Date().getHours());
        let minutes = showMinutes(new Date().getMinutes());
        let seconds = showSeconds(new Date().getSeconds());
        let date = new Date().getDate();
        let dateShort = new Date();
        let options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        dateShort = dateShort.toLocaleString("ru", options);
        return { today, date, month, year, hour, minutes, seconds, dateShort };
    };
    function updateClock() {
        let getTime = getValues();
        today.textContent = `Сегодня ${getTime.today} , ${getTime.date} ${getTime.month} ${getTime.year} года, ${getTime.hour} ${getTime.minutes} ${getTime.seconds}`;
        dateTime.textContent = getTime.dateShort;
        if (getTime.seconds < 0) {
            clearInterval(interval);
        }
    }
    let interval = setInterval(updateClock, 1000);
};


calendar();