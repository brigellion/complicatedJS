
let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    outWeek = document.getElementById('week'),
    day = 0;//new Date().getDay() - 1;


week.forEach(function (item, index) {
    (day == 0) ? day = 6 : day;
    if (index == day) {
        outWeek.innerHTML += "<p><b>" + item + "</p></b>";
        return;
    }
    if (item == 'Сб' || item == 'Вс') {
        outWeek.innerHTML += "<p><i>" + item + "</p></i>";
    }
    else {
        outWeek.innerHTML += "<p>" + item + "</p>";
    }
}
);