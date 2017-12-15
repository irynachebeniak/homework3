
function fibonacciArray(a)
 {
  const array = [1, 1];
  for (let i = 0; i < a - 2; i++) 
  {
    array.push(array[array.length - 2] + array[array.length - 1]);
  }
  return array.pop();
}
var a = prompt("введіть порядковий номер числа фібоначі, яке буде розраховано");
document.write("Цикл: " + fibonacciArray(a) + "<br>");