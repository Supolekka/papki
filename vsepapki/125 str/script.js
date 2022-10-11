var words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек",
    "окунь",
    "гнилозубп"
];
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
}
var remainingLetters = word.length;
var guess1 = 10;

while (remainingLetters > 0 && guess1 > 0) {
    alert(answerArray.join(" "));
var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры. ");
if (guess === null){
    break;
}   else if (guess.length !== 1){
    alert("Пожалуйста, введите одиночную букву.");
}   else{
    guess1--;
    guess = guess.toLowerCase();
    for (var j = 0; j < word.length; j++){
        if (word[j] === guess){
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
}
}
alert(answerArray.join(""));
    if (guess1 > 0) {
        alert("Отлично! Было загадано слово " + word);
}   else {
    alert("Вы проиграли:(((")
}