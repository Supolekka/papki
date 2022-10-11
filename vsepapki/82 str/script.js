// Задание 1
var scores = {
    "Данил": 0,
    "Рыба": 0,
    "Джулия": 0,
    "Владимир": 0
};
scores ["Данил"] += 520;
scores ["Рыба"] += 300;
scores ["Джулия"] += 785;
scores ["Владимир"] += 150;
document.write(" Задание 1: 1.а) " + scores["Данил"])
document.write(" 1.б) " + scores["Рыба"])
document.write(" 1.в) " + scores["Джулия"])
document.write(" 1.г) " + scores["Владимир"])

// Задание 2

var myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
};
document.write(" Задание 2: " + myCrazyObject["some array"][2].number)