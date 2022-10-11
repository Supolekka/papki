//Задание 1 
var add = function (a, b) {
    return a + b;
};
var multiply = function (a, b){
    return a * b;
};
var otvet = add(multiply(36325, 9824), 777);
document.write("1) " + otvet)

//Задание 2
var areArraysSame = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
areArraysSame([1, 2, 3], [4, 5, 6]);
areArraysSame([1, 2, 3], [1, 2, 3]);
areArraysSame([1,2,3], [1,2,3,4]);
document.write(" 2) [1,2,3], [4,5,6] " + areArraysSame([1,2,3], [4,5,6]));
document.write(" [1,2,3], [1,2,3] " + areArraysSame([1,2,3], [1,2,3]));
document.write(" [1,2,3], [1,2,3,4] " + areArraysSame([1,2,3], [1,2,3,4]));