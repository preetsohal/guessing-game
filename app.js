/* Ask the user their name */
var userName = prompt('What is your name?');
console.log('The user\'s name is ' + userName + '.');
alert('That is a fantastic name ' + userName + '!');

alert('I will ask you 3 yes or no questions about myself.  Please answer with a Y or a N.');

/* Question 1 */
var ans1 = prompt('Question 1: Was Joe born in Cincinnati?');
console.log('The user answered ' + ans1 + ' to question 1');

if ((ans1 === 'Y') || (ans1 === 'y') || (ans1 === 'YES') || (ans1 === 'yes')) {
  alert('You are correct!  Joe was born in Cincinnati.');
} else if ((ans1 === 'N') || (ans1 === 'n') || (ans1 === 'NO') || (ans1 === 'no')) {
  alert('Sorry, you are wrong, Joe was actually born in Cincinnati');
} else {
  alert('You did not answer Y or N :\(');
}

/* Question 2 */
var ans2 = prompt('Question 2: Does Joe like to snowboard?');
console.log('The user answered ' + ans2 + ' to question 2');

if ((ans2 === 'Y') || (ans2 === 'y') || (ans2 === 'YES') || (ans2 === 'yes')) {
  alert('You are correct!  Joe does like to snowboard.');
} else if ((ans2 === 'N') || (ans2 === 'n') || (ans2 === 'NO') || (ans2 === 'no')) {
  alert('Sorry, you are wrong, Joe does like to snowboard');
} else {
  alert('You did not answer Y or N :\(');
}

/* Question 3 */
var ans3 = prompt('Question 3: Does Joe have 2 younger brothers?');
console.log('The user answered ' + ans3 + ' to question 3');

if ((ans3 === 'Y') || (ans3 === 'y') || (ans3 === 'YES') || (ans3 === 'yes')) {
  alert('You are correct!  Joe does have 2 younger brothers.');
} else if ((ans3 === 'N') || (ans3 === 'n') || (ans3 === 'NO') || (ans3 === 'no')) {
  alert('Sorry, you are wrong, Joe does have 2 younger brothers.');
} else {
  alert('You did not answer Y or N :\(');
}

/* Optional question 4 */
alert('I will now ask you a final question with a numeric answer.  Please answer with a number.');

var ans4 = prompt('Question 4: How many years did Joe live in Houston, TX?');
console.log('The user guessed that Joe lived in Houston for ' + ans4 + ' years.');

if (ans4 > 3) {
  alert('Sorry, Joe only lived in Houston for 3 years.');
} else if (ans4 < 3) {
  alert('Sorry, Joe lived in Houston for 3 years.');
} else if (ans4 == 3) {
  alert('You guessed it!  He lived in Houston for 3 years.');
} else {
  alert('Sorry, you did not enter a number :\(');
}

alert('Great job answering those questions about Joe');
