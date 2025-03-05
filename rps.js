// This is for rock paper scissors project;


const Rock = 1;
const Paper = 2;
const Scissors = 3;
let Playerscore = 0;
let Botscore = 0;
let PlayerChoice = undefined;
let BotChoice = undefined;
let input = undefined;
function Playerinput(){
    input = prompt("Rock, Paper, Scissors");

switch(input){
    case "Rock":
        PlayerChoice = 1;
        Botinput(1)
        break;
    case "Paper":
        PlayerChoice = 2;
        Botinput(2)
        break;
    case "Scissors":
        PlayerChoice = 3;
        Botinput(3)
        break;
    default:
        Playerinput()
        break;
    }
}

//Code = number (Player#, Bot#);

Playerinput()
function Botinput(max){
    PlayerChoice = Math.ceil(Math.random() * max)
    BotChoice = Math.floor(Math.random() * max)
    if(PlayerChoice == BotChoice){
        console.log("You tied, I hope you do better next time")
    } else if(PlayerChoice == Rock){
        if(BotChoice == Scissors){
            PlayerChoice = PlayerChoice +1;
            console.log("The Bot picked scissors, you won:)");
        } else {
            Botscore = Botscore +1;
            console.log("You lost try again:~(");
        }
    }
    else if(PlayerChoice == Paper){
        if(BotChoice == Rock){
            PlayerChoice = PlayerChoice +1;
            console.log("The Bot picked rock, you win ;)");
        } else {
            Botscore = Botscore +1;
            console.log("You lost try again :~(");
        }
    } else if(PlayerChoice == Scissors){
        if(BotChoice == Paper){
            PlayerChoice = PlayerChoice +1;
            console.log("The Bot picked rock, you win :)");
        } else {
            Botscore = Botscore +1;
            console.log("You lost try again :~(");
        }
    } console.log(Playerscore);
    console.log(Botscore);
}