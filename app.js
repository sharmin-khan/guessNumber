const min = 1;
const max = 100;
const result = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;
let guessing;
let run = true;
while (run) {
  guessing = window.prompt(`Guess a number between ${min} - ${max}`);
  guessing = Number(guessing);
  if (isNaN(guessing)) {
    window.alert(`Please enter a valid number`);
  } else if (guessing < min || guessing > max) {
    window.alert(`Please enter a valid number`);
  } else {
    attempts++;
    if (guessing < result) {
      window.alert(`Too low`);
    } else if (guessing > result) {
      window.alert(`Too high `);
    } else {
      window.alert(
        `Correct! the answer is ${result} and you have ${attempts} completed`
      );
      run = false;
    }
  }
}
