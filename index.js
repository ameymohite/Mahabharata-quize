const chalk = require("chalk");
var readlineSync = require("readline-sync");

var userName = readlineSync.question("Please enter your name : ");

console.log(chalk.underline("WELCOME " + chalk.italic(userName.toUpperCase()) + " to MAHABHARATA quize "));


var userReply = readlineSync.question("do you know about this legend history ? (yes/no)");

console.log(chalk.cyan("--> Give at least one correct answer out of two to enter to level two of quiz <--"));
var score = 0;




if(userReply.toUpperCase()=="YES") { 






  console.log(chalk.bold.italic.bgCyan("Let's begin,  here comes your first question :"));

function play(question,answer) {

  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase()==answer.toUpperCase()) {

      console.log(chalk.green("BINGO!!!!! Your Answer is correct"));
      
      score = score + 1;
      

  } else {

      console.log(chalk.red("Ohh You miss it this time give it a try for next question"));

      console.log("--------------------------------------------------------------");

      return;
      
      
  }

console.log("You Scored : " + chalk.yellow(score) +" / 4");
console.log("--------------------------------------------------------------");

}





var levelOne = [{

  question : chalk.blue("1. ") + "Who seized Draupadi by her hair and dragged her into the court? ",

  answer : "Duhshasan"
}, 

{
  question : chalk.blue("2. ") + "Great hero from Mahabharata who lived a life such a way today he is another name for generosity and loyalty today - ",

  answer : "Karna"
}];




for(i=0;i<levelOne.length;i++) {

var currentQuestionOne = levelOne[i];

play(currentQuestionOne.question,currentQuestionOne.answer);

}


console.log(chalk.bold.bgBlack(" Your level one score is : " + score));








var levelTwo = [{
  question : chalk.blue("1. ") + "Who was the son of Bhima and Hidimba ? ",

  answer : "Ghatotkach"
},

{
  question : chalk.blue("2. ") + "Kunti's Son Karna also known with this name - ",

  answer : "Radhey"
}];




if(score>=1) {

  console.log(chalk.bold(">>>>>>> " + chalk.underline("Welcome to level two of quiz") + " <<<<<<<"));

for(i=0;i<levelTwo.length;i++) {

var currentQuestionTwo = levelTwo[i];

play(currentQuestionTwo.question,currentQuestionTwo.answer);

}

} else {
  console.log(chalk.bgRed("Try better hard next time for level two entry"));
}

console.log(chalk.bold.bgBlack.underline("***** YAY!! Your total score is : " + score +" / 4 *****"));


var highScores = [{
  name : "aa",
  obtained : 1
}, {
  name:"bb",
  obtained : 0
}];

for(i=0;i<highScores.length;i++) {

  var currentHigh = highScores[i];

console.log("CHECK OUT THE HIGH SCORES: ");
console.log("1. Name: aa, Score: 1");
console.log("2. Name: bb, Score: 0");


  if(score>currentHigh.obtained){
  console.log("$$$$$$$ You Scored the Highest Score $$$$$$$");
  console.log("Please share this screenshot with me");
  break;
  } else {
  console.log(chalk.bgMagenta("You are just a step away from achieving high score try for it"));
  break;
  }

  
}








} else if(userReply.toUpperCase()=="NO") 
console.log(chalk.inverse.bold("See You Soon Again"));



