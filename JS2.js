function showTriangle() {
    let a = document.getElementById("Triangle");
    let b = document.getElementById("String");
    let c = document.getElementById("Mass");
    let d = document.getElementById("Timer");
    if (a.style.visibility == 'hidden') {
        a.style.visibility = 'visible';
        b.style.visibility = 'hidden';
        c.style.visibility = 'hidden';
        d.style.visibility = 'hidden';
    } else {
        a.style.visibility = 'hidden';
    }
}

function showString() {
    let a = document.getElementById("Triangle");
    let b = document.getElementById("String");
    let c = document.getElementById("Mass");
    let d = document.getElementById("Timer");
    if (b.style.visibility == 'hidden') {
        a.style.visibility = 'hidden';
        b.style.visibility = 'visible';
        c.style.visibility = 'hidden';
        d.style.visibility = 'hidden';
    } else {
        b.style.visibility = 'hidden';
    }
}

function showMass() {
    let a = document.getElementById("Triangle");
    let b = document.getElementById("String");
    let c = document.getElementById("Mass");
    let d = document.getElementById("Timer");
    if (c.style.visibility == 'hidden') {
        a.style.visibility = 'hidden';
        b.style.visibility = 'hidden';
        c.style.visibility = 'visible';
        d.style.visibility = 'hidden';
    } else {
        c.style.visibility = 'hidden';
    }
}

function showTimer() {
    let a = document.getElementById("Triangle");
    let b = document.getElementById("String");
    let c = document.getElementById("Mass");
    let d = document.getElementById("Timer");
    if (d.style.visibility == 'hidden') {
        a.style.visibility = 'hidden';
        b.style.visibility = 'hidden';
        c.style.visibility = 'hidden';
        d.style.visibility = 'visible';
    } else {
        d.style.visibility = 'hidden';
    }
}

/* треугольник */
function areaOfTriangle(obj) {
    var a = 1 * obj.st1.value;
    var b = 1 * obj.st2.value;
    var c = 1 * obj.st3.value;
    var p = (a + b + c) / 2;
    var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    obj.res.value = s;
}

/* Стравним строки */
function compareString() {
    let a = document.getElementById("string1");
    let b = document.getElementById("string2");
    if (a.value == b.value) {
        document.getElementById("ans1").innerHTML = 'true';
    } else {
        document.getElementById("ans1").innerHTML = 'false';
    }
}

/* Минимакс в массиве */
function calculateMass() {
    let arr = [];
    let form = document.getElementById("formid");
    let els = form.getElementsByTagName("input");
    for (let i = 0; i < els.length; i++) {
        let a = [];
        a[0] = els[i].name;
        a[0] = els[i].value;
        arr[i] = a;
    }
    document.getElementById("ans2a").innerHTML = "Max: " + Math.max.apply(null, arr);
    document.getElementById("ans2b").innerHTML = "Min: " + Math.min.apply(null, arr);
}

/*тест*/
function proverit() {
    zadachi_1 = 'var, let, const';
    zadachi_2 = 'язык программирования';
    zadachi_3 = 'коллекции';
    zadachi_4 = 'полный набор инструментов';
    zadachi_5 = 'const';
    zadachi_6 = 'string, number, boolean, undefined, null';
    zadachi_7 = '5';
    zadachi_8 = 'упорядоченная коллекция данных';
    zadachi_9 = 'НЕ';
    zadachi_10 = 'for, while';
    otv_1 = document.getElementById('z_1').value;
    otv_2 = document.getElementById('z_2').value;
    otv_3 = document.getElementById('z_3').value;
    otv_4 = document.getElementById('z_4').value;
    otv_5 = document.getElementById('z_5').value;
    otv_6 = document.getElementById('z_6').value;
    otv_7 = document.getElementById('z_7').value;
    otv_8 = document.getElementById('z_8').value;
    otv_9 = document.getElementById('z_9').value;
    otv_10 = document.getElementById('z_10').value;
    ball = 0;
    if (otv_1 == zadachi_1) {
        ball += 1;
    }
    if (otv_2 == zadachi_2) {
        ball += 1;
    }
    if (otv_3 == zadachi_3) {
        ball += 1;
    }
    if (otv_4 == zadachi_4) {
        ball += 1;
    }
    if (otv_5 == zadachi_5) {
        ball += 1;
    }
    if (otv_6 == zadachi_6) {
        ball += 1;
    }
    if (otv_7 == zadachi_7) {
        ball += 1;
    }
    if (otv_8 == zadachi_8) {
        ball += 1;
    }
    if (otv_9 == zadachi_9) {
        ball += 1;
    }
    if (otv_10 == zadachi_10) {
        ball += 1;
    }
    vsego_zadach = 10;
    procent_vip = ball / vsego_zadach * 100;
    document.getElementById('rezultat').innerHTML = "Ваш результат: " + procent_vip + "%.";
}

const name = prompt('Как вас зовут?');
if (name) {
    document.querySelector('#welcome').innerHTML = `<b>${name}</b>`;
} else {
    document.querySelector('#welcome').innerHTML = '<b>Гость</b>';
}
document.getElementById("top_name").innerHTML = name;

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*Время*/

function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

/* функция получения текущей даты и времени */
function date_time() {
    var current_datetime = new Date();
    var day = zero_first_format(current_datetime.getDate());
    var month = zero_first_format(current_datetime.getMonth() + 1);
    var year = current_datetime.getFullYear();
    //var hours = zero_first_format(current_datetime.getHours());
    //var minutes = zero_first_format(current_datetime.getMinutes());
    //var seconds = zero_first_format(current_datetime.getSeconds());

    return day + "." + month + "." + year;
}

/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
document.getElementById('current_date_time_block').innerHTML = date_time();

