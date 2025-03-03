// This is for rock paper scissors project;


const rock = 1;
const paper = 2;
const scissors = 3;
let PlayerChoice = undefined;
let BotChoice = undefined;
let input = undefined;
function Playerinput(){
    input = prompt("Rock, Paper, Scissors");

switch(input){
    case "Rock":
        PlayerChoice = 1;
        break;
    case "Paper":
        PlayerChoice = 2;
        break;
    case "Scissors":
        PlayerChoice = 3;
        break;
    default:
        Playerinput()
        break;
    }
}
Playerinput()
function Botinput(max){
    BotChoice = Math.ceil(Math.random() * max)
    return BotChoice
}
