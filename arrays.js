let arr = [];
let count = 1;

function fizzbuzz() {
arr.push(count);
count++;
console.log(arr);

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if(element%3 === 0 && element%5 === 0){
    arr.push("fizzBuzz");
  }
  if(element%3 === 0){
    arr.push("fizz");
  }
  if(element%5 === 0) {
    arr.push("buzz");
  }
}
console.log(arr);
};

fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
