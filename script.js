const arr = ['223', '321', '404', '532', '232', '414', '555'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 2 || arr[i][0] == 4) {
        console.log(arr[i]);
    }
}

console.log('/////2 задание//////');


for (let i = 2; i <= 100; i++) {
    let simple = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            simple = false;
            break;
        }
    }
    if (simple) {
        console.log("Число " + i + ". Делители этого числа: 1 и " + i);
    }
}