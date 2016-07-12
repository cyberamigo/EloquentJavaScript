//Excercises 1 & 2
//create a loop that will do the required, this is for practice
/*Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/

//function to make it possible to do the computation with any number
function countTo(num) {
for(var i = 0; i <= 100; i++){ //loop through everynumber starting at 1
  if(i%3 === 0 && i%5 === 0){ //check to see if the number is divisble by both 3 and 5
    console.log('FizzBuzz') //if it is print out the phrase 'FizzBuzz'
  } else if (i%3 === 0) { //check if is divisble by only by 3
    console.log('Fizz')
  } else if (i%5 === 0){ //check if number is divisble only by 5
    console.log('Buzz')
		} else 
      console.log(i); //if number is not divisble by anything then print the actual  number the loop is on
	}
}


//excersice two
// **ChessBoard**

var board = ""; //create an empty board


function boardF(size) { //function to use for the size of the board
	for(var i = 0; i < size; i++ ){ //first loop responsible for the new line
    for (var e = 0; i < size; e++){ //second loop responsible for the rows
      if ((e+i) % 2 == 0){ // check where the chars are at
        board += ' '; 
      } else {
        board += '#';
        }
      }
        board += '\n';
  }
}