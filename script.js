function capitalizeFirstLetter(text)
{
    return (text.charAt(0).toUpperCase() + text.slice(1));
}

function getComputerChoice()
{
    let randomNum = Math.floor(Math.random() * 3 + 1);
    let compChoice;
    switch(randomNum)
    {
        case 1:
            compChoice = "Rock";
            break;

        case 2:
            compChoice = "Paper";
            break;

        case 3:
            compChoice = "Scissors";
            break;
    }
    return compChoice;
}

function getPlayerChoice()
{
    let userInput = null;
    while((userInput === null) || userInput === "")
    {
        userInput = prompt("Enter your choice (rock or paper or scissors): ");
    }
    let userChoice = userInput.toLowerCase();

    if ((userChoice !== "rock") && (userChoice !== "paper") && (userChoice !== "scissors"))
    {
        return "";
    }
    return capitalizeFirstLetter(userChoice);
}

function playRound(playerSelection, computerSelection, playerWinsNum, computerWinsNum)
{

    switch(playerSelection)
    {
        case "Rock":
            switch(computerSelection)
            {
                case "Rock":
                    window.alert("Tie! You both chose Rock");
                    break;

                case "Paper":
                    window.alert("You Lose! Paper beats Rock");
                    computerWinsNum++;
                    break;

                case "Scissors":
                    window.alert("You Win! Rock beats Scissors");
                    playerWinsNum++;
                    break;
            }
            break;
        
        case "Paper":
            switch(computerSelection)
            {
                case "Rock":
                    window.alert("You Win! Paper beats Rock");
                    playerWinsNum++;
                    break;

                case "Paper":
                    window.alert("Tie! You both chose Paper");
                    break;

                case "Scissors":
                    window.alert("You Lose! Scissors beats Paper");
                    computerWinsNum++;
                    break;
            }
            break;

        case "Scissors":
            switch(computerSelection)
            {
                case "Rock":
                    window.alert("You Lose! Rock beats Scissors");
                    computerWinsNum++;
                    break;

                case "Paper":
                    window.alert("You Win! Scissors beats Paper");
                    playerWinsNum++;
                    break;

                case "Scissors":
                    window.alert("Tie! You both chose Scissors");
                    break;
            }
            break;

        default:
            window.alert("This round is invalid due to the user's input. Make sure to input either rock or paper or scissors");
    }
    return [playerWinsNum, computerWinsNum];
}

function playGame(roundsNum)
{
    let playerWins = 0;
    let computerWins = 0;
    
    for (let i = 0; i < roundsNum; i++)
    {
        let winsNum = playRound(getPlayerChoice(), getComputerChoice(), playerWins, computerWins);
        playerWins = winsNum[0];
        computerWins = winsNum[1];
        window.alert(`Current Score: You have won ${playerWins} rounds  |  Computer has won ${computerWins} rounds`);
    }
}

playGame(5);