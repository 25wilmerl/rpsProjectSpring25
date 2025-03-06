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
input = input.toLowerCase();
    switch(input){
        case "rock":
            PlayerChoice = 1;
            break;
        case "paper":
            PlayerChoice = 2;
            break;
        case "scissors":
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
            Playerscore = Playerscore +1;
            console.log("The Bot picked scissors, you won:)");
        } else {
            Botscore = Botscore +1;
            console.log("You lost, the Bot chose scissors, try again:( ");
        }
    }
    else if(PlayerChoice == Paper){
        if(BotChoice == Rock){
            Playerscore = Playerscore +1;
            console.log("The Bot picked rock, you win ;)");
        } else {
            Botscore = Botscore +1;
            console.log("You lost, the Bot chose rock, try again :(");
        }
    } else if(PlayerChoice == Scissors){
        if(BotChoice == Paper){
            Playerscore = Playerscore +1;
            console.log("The Bot picked rock, you win :)");
        } else {
            Botscore = Botscore +1;
            console.log("You lost, the Bot chose paper, try again :(");
        }
    } console.log(`Playerscore is ${Playerscore}`);
    console.log(`Botscore is ${Botscore}`);
}

while (Playerscore < 5 && Botscore < 5){
    Botinput(3);
}
while (Botscore < 5 && Playerscore < 5){
    Playerinput(3);
};