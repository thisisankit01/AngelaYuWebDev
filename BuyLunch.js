let arr = ["kriti", "susukriti", "shivam", "shubham", "lucky","Ankit"];

function randomPerson() {
  const number = arr.length;
  const randomNumber = Math.floor(Math.random()*number);
  const randomName = arr[randomNumber];
   
  console.log(`${randomName} is going to buy lunch for all.` );
};

randomPerson();