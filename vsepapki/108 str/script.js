// Задание 1
var animals = ["1: Кот", "Рыба", "Лемур", " Комодский варан"];
for (var i = 0; i < animals.length; i++){
    document.write(animals[i] + " - прекрасное животное ");
}
// Задание 2
var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString = "";
var stringLength = 6;
while (randomString.length < stringLength){
    randomString += alphabet[Math.floor(Math.random() *alphabet.length)];
}
document.write(" Задание 2: " + randomString);
// Задание 3
var input = "javascript if awesome";
var output = "";
for (var i = 0; i < input.length; i++){
    if (input[i] === "a") {
        output += "4";
    }else if (input[i] === "e")
    {
        output += "3";
    }else if (input[i] === "i")
    {
         output += "1";
    }else if (input[i] === "o")
    {
         output += "0";
    } else{
        output += input[i];
    }
}
document.write(" Задание 3: " + output)    
    
    
    
