// Code your solutions in this file
const writeCards = (names) => {
  return names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
}
console.log (writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

const countDown = (number) => {
  for (let i = number; i >= 0; i--) {
      console.log(i)
  }
}

countDown(10);
countDown(4);