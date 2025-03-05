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
    return PlayerChoice
}

//Code = number (Player#, Bot#);


function Botinput(max){
    PlayerChoice = Playerinput()
    BotChoice = Math.ceil(Math.random() * max)
    console.log(PlayerChoice, BotChoice)
    if(PlayerChoice == BotChoice){
        console.log("You tied, I hope you do better next time")
    } else if(PlayerChoice == Rock){
        if(BotChoice == Scissors){
            PlayerChoice = Playerscore +1;
            console.log("The Bot picked scissors, you won:)");
        } else {
            Botscore = Botscore +1;
            console.log("You lost, the Bot chose scissors, try again:( ");
        }
    }
    else if(PlayerChoice == Paper){
        if(BotChoice == Rock){
            PlayerChoice = Playerscore +1;
            console.log("The Bot picked rock, you win ;)");
        } else {
            Botscore = Botscore +1;
            console.log("You lost, the Bot chose rock, try again :(");
        }
    } else if(PlayerChoice == Scissors){
        if(BotChoice == Paper){
            PlayerChoice = Playerscore +1;
            console.log("The Bot picked rock, you win :)");
        } else {
            Botscore = Botscore +1;
            console.log("You lost, the Bot chose paper, try again :(");
        }
    } console.log(Playerscore);
    console.log(Botscore);
}

while (Playerscore < 3 && Botscore < 3){
    Botinput(3);
}
while (Botscore < 3 && Playerscore < 3){
    Playerinput(3);
}