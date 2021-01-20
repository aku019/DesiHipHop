const chalk = require('chalk');
const readLineSync= require('readline-sync');
let score=0;
let best_score=-10;





//console.log(chalk.yellow.bold(question_1[0].question));

welcome();
rules();
game_begins();
final_score();


function rules()
{
  
  console.log(chalk.bgRed(`\nThere will be 5 Questions. Each having 4 options(A,B,C,D). You need to enter your response in any of the 4 alphabets mentioned. Anyother response will be a false response.For every correct response you get +2 points and for every wrong response you get -1 Points.\n`));

}











function welcome()
{



const name=readLineSync.question(chalk.green.bold('What is your name?\n'));
console.log(chalk.yellow.bold(`Hello ${name}`));

console.log(chalk.cyan(`Ready to test how big a desi hip hop fan you are?\nRead the rules before proceeding`));
}


function game_begins()
{
  const tools = require("./questionset.js");
const questions=tools.questions

for (let sawal = 0;sawal<questions.length;sawal++)
{
  console.log(chalk.red(`Here is your question number ${sawal+1}`));
  console.log(chalk.yellow.bold(questions[sawal].question));
  console.log(chalk.cyan.bold(`A: ${questions[sawal].A}`));
  console.log(chalk.cyan.bold(`B: ${questions[sawal].B}`));
  console.log(chalk.cyan.bold(`C: ${questions[sawal].C}`));
  console.log(chalk.cyan.bold(`D: ${questions[sawal].D}`));
  const response=readLineSync.question(chalk.green.bold('What is your Response?\n'));
  if(response.toUpperCase() === questions[sawal].correct)
  {console.log("Correct");
  score+=2;
  console.log(`Current score is:${score}`);
  }
  else
  {
    console.log(`Current answer is:${questions[sawal].correct}`);
    score-=1;
    console.log(`Current score is:${score}`);
  }
  
  console.log();
}

}

function final_score()
{
console.log(`Your final score is ${score}`);

if(score>=best_score)
{
  console.log("YaY! You are the new top scorer! BAHOT HARD!");
 // best_player=name;
  best_score=score;
}
}

