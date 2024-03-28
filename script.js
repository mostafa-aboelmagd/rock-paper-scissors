function getComputerChoice()
{
    let randomNum = Math.floor(Math.random() * 3 + 1);
    let compChoice;
    switch(randomNum)
    {
        case 1:
            compChoice = "rock";
            break;

        case 2:
            compChoice = "paper";
            break;

        case 3:
            compChoice = "scissors";
            break;
    }
    return compChoice;
}

let container = document.querySelector(".page_container");

let startButton = document.createElement("button");
startButton.textContent = "START GAME";
startButton.classList.add("start_button");

document.addEventListener("DOMContentLoaded", () => {
    container.appendChild(startButton);
});


startButton.addEventListener("click", () => {
    let playerScore = 0;
    let compScore = 0;

    container.removeChild(startButton);

    let userGameCard = document.createElement("div");
    let computerGameCard = document.createElement("div");
    let userImage = document.createElement("img");
    let computerImage = document.createElement("img");
    let userScore = document.createElement("p");
    let computerScore = document.createElement("p");
    let userChoicesContainer = document.createElement("div");
    let userRockChoice = document.createElement("div");
    let userRockImage = document.createElement("img");
    let userPaperChoice = document.createElement("div");
    let userPaperImage = document.createElement("img");
    let userScissorsChoice = document.createElement("div");
    let userScissorsImage = document.createElement("img");
    let compChoicesContainer = document.createElement("div");
    let compRockChoice = document.createElement("div");
    let compRockImage = document.createElement("img");
    let compPaperChoice = document.createElement("div");
    let compPaperImage = document.createElement("img");
    let compScissorsChoice = document.createElement("div");
    let compScissorsImage = document.createElement("img");

    userImage.setAttribute("src", "./images/user.png");
    userImage.setAttribute("alt", "User Icon");
    userImage.setAttribute("width", "100px");
    userImage.setAttribute("height", "100px");

    computerImage.setAttribute("src", "./images/computer.png");
    computerImage.setAttribute("alt", "Computer Icon");
    computerImage.setAttribute("width", "100px");
    computerImage.setAttribute("height", "100px");
    
    userScore.textContent = "Score: " + playerScore;
    computerScore.textContent = "Score: " + compScore;

    userRockImage.setAttribute("src", "./images/rock.png");
    userRockImage.setAttribute("alt", "Rock");
    userRockImage.setAttribute("width", "100px");
    userRockImage.setAttribute("height", "100px");

    compRockImage.setAttribute("src", "./images/rock.png");
    compRockImage.setAttribute("alt", "Rock");
    compRockImage.setAttribute("width", "100px");
    compRockImage.setAttribute("height", "100px");
    
    userPaperImage.setAttribute("src", "./images/paper.png");
    userPaperImage.setAttribute("alt", "Paper");
    userPaperImage.setAttribute("width", "100px");
    userPaperImage.setAttribute("height", "100px");

    compPaperImage.setAttribute("src", "./images/paper.png");
    compPaperImage.setAttribute("alt", "Paper");
    compPaperImage.setAttribute("width", "100px");
    compPaperImage.setAttribute("height", "100px");
    
    userScissorsImage.setAttribute("src", "./images/scissors.png");
    userScissorsImage.setAttribute("alt", "Scissors");
    userScissorsImage.setAttribute("width", "100px");
    userScissorsImage.setAttribute("height", "100px");

    compScissorsImage.setAttribute("src", "./images/scissors.png");
    compScissorsImage.setAttribute("alt", "Scissors");
    compScissorsImage.setAttribute("width", "100px");
    compScissorsImage.setAttribute("height", "100px");

    userGameCard.classList.add("game_card");
    computerGameCard.classList.add("game_card");
    userImage.classList.add("icon");
    computerImage.classList.add("icon");
    userChoicesContainer.classList.add("choices_container");
    compChoicesContainer.classList.add("choices_container");
    userRockChoice.classList.add("choice");
    compRockChoice.classList.add("choice");
    userRockImage.classList.add("rock");
    compRockImage.classList.add("rock");
    userPaperChoice.classList.add("choice");
    compPaperChoice.classList.add("choice");
    userPaperImage.classList.add("paper");
    compPaperImage.classList.add("paper");
    userScissorsChoice.classList.add("choice");
    compScissorsChoice.classList.add("choice");
    userScissorsImage.classList.add("scissors");
    compScissorsImage.classList.add("scissors");

    userScissorsChoice.appendChild(userScissorsImage);
    compScissorsChoice.appendChild(compScissorsImage);
    userPaperChoice.appendChild(userPaperImage);
    compPaperChoice.appendChild(compPaperImage);
    userRockChoice.appendChild(userRockImage);
    compRockChoice.appendChild(compRockImage);

    userChoicesContainer.appendChild(userRockChoice);
    userChoicesContainer.appendChild(userPaperChoice);
    userChoicesContainer.appendChild(userScissorsChoice);
    compChoicesContainer.appendChild(compRockChoice);
    compChoicesContainer.appendChild(compPaperChoice);
    compChoicesContainer.appendChild(compScissorsChoice);

    userGameCard.appendChild(userImage);
    userGameCard.appendChild(userScore);
    userGameCard.appendChild(userChoicesContainer);

    computerGameCard.appendChild(computerImage);
    computerGameCard.appendChild(computerScore);
    computerGameCard.appendChild(compChoicesContainer);

    
    let userChoicesList = userGameCard.querySelector(".choices_container");
    let computerChoicesList = computerGameCard.querySelector(".choices_container");
    let userChoices = userChoicesList.querySelectorAll(".choice");
    for(let i = 0; i < userChoices.length; i++)
    {

        let userImg = userChoices[i].querySelector("img");

        userImg.addEventListener("mouseover", () => {
            userImg.style.transform = "scale(1.15)";
            userImg.style.transition = "0.2s";
        });

        let isClicked = false;

        userImg.addEventListener("mouseout", () => {
            if(!isClicked)
            {
                userImg.style.transform = "scale(1)";
                userImg.style.transition = "0.2s";
            }
        });

        userImg.addEventListener("click", () => {
            isClicked = true;

            let playedSymbol = userImg.getAttribute("class");
            let compSymbol = getComputerChoice();
            
            let computerChoices = computerChoicesList.querySelectorAll(".choice");
            let compImg = computerChoices[0].querySelector("img");
            for(let i = 0; i < computerChoices.length; i++)
            {
                let currImg = computerChoices[i].querySelector("img");
                if(currImg.getAttribute("class") == compSymbol)
                {
                    compImg = currImg;
                    break;
                }
            }

            switch(playedSymbol)
            {
                case "rock":
                    switch(compSymbol)
                    {
                        case "rock":
                            userGameCard.style["background-color"] = "rgb(100, 149, 237)";
                            computerGameCard.style["background-color"] = "rgb(100, 149, 237)";
                            userImg.style.transform = "scale(1.15)";
                            compImg.style.transform = "scale(1.15)";
                            setTimeout(() => {
                                isClicked = false;
                                userGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                computerGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                userImg.style.transform = "scale(1)";
                                compImg.style.transform = "scale(1)";
                            }, 1500);
                            break;

                        case "paper":
                            compScore++;
                            if(compScore === 5)
                            {
                                container.removeChild(userGameCard);
                                container.removeChild(computerGameCard);

                                let gameWinnerContainer = document.createElement("div");
                                let crownImage = document.createElement("img");
                                let restartGameButton = document.createElement("button");

                                crownImage.setAttribute("src", "./images/crown.png");
                                crownImage.setAttribute("alt", "Crown");
                                crownImage.setAttribute("width", "100px");
                                crownImage.setAttribute("height", "100px");
                            
                                restartGameButton.textContent = "PLAY AGAIN";

                                gameWinnerContainer.classList.add("game_winner");
                                restartGameButton.classList.add("start_button");

                                gameWinnerContainer.appendChild(crownImage);
                                gameWinnerContainer.appendChild(computerImage);

                                container.appendChild(gameWinnerContainer);
                                container.appendChild(restartGameButton);

                                restartGameButton.addEventListener("click", () => {
                                    container.removeChild(gameWinnerContainer);
                                    container.removeChild(restartGameButton);
                                    container.appendChild(startButton);
                                });
                            }
                            else
                            {
                                userGameCard.style["background-color"] = "rgb(220, 87, 87)";
                                computerGameCard.style["background-color"] = "rgb(127, 255, 212)";
                                userImg.style.transform = "scale(1.15)";
                                compImg.style.transform = "scale(1.15)";
                                userScore.textContent = "Score: " + playerScore;
                                computerScore.textContent = "Score: " + compScore;

                                setTimeout(() => {
                                    isClicked = false;
                                    userGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                    computerGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                    userImg.style.transform = "scale(1)";
                                    compImg.style.transform = "scale(1)";
                                }, 1500);
                            }
                            break;

                        case "scissors":
                            playerScore++;
                            if(playerScore === 5)
                            {
                                container.removeChild(userGameCard);
                                container.removeChild(computerGameCard);

                                let gameWinnerContainer = document.createElement("div");
                                let crownImage = document.createElement("img");
                                let restartGameButton = document.createElement("button");

                                crownImage.setAttribute("src", "./images/crown.png");
                                crownImage.setAttribute("alt", "Crown");
                                crownImage.setAttribute("width", "100px");
                                crownImage.setAttribute("height", "100px");
                            
                                restartGameButton.textContent = "PLAY AGAIN";

                                gameWinnerContainer.classList.add("game_winner");
                                restartGameButton.classList.add("start_button");

                                gameWinnerContainer.appendChild(crownImage);
                                gameWinnerContainer.appendChild(userImage);

                                container.appendChild(gameWinnerContainer);
                                container.appendChild(restartGameButton);

                                restartGameButton.addEventListener("click", () => {
                                    container.removeChild(gameWinnerContainer);
                                    container.removeChild(restartGameButton);
                                    container.appendChild(startButton);
                                });
                            }
                            else
                            {
                                userGameCard.style["background-color"] = "rgb(127, 255, 212)";
                                computerGameCard.style["background-color"] = "rgb(220, 87, 87)";
                                userImg.style.transform = "scale(1.15)";
                                compImg.style.transform = "scale(1.15)";
                                userScore.textContent = "Score: " + playerScore;
                                computerScore.textContent = "Score: " + compScore;

                                setTimeout(() => {
                                    isClicked = false;
                                    userGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                    computerGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                    userImg.style.transform = "scale(1)";
                                    compImg.style.transform = "scale(1)";
                                }, 1500);
                            }
                            break;
                    }
                    break;
                
                case "paper":
                    switch(compSymbol)
                    {
                        case "rock":
                            playerScore++;
                            if(playerScore === 5)
                            {
                                container.removeChild(userGameCard);
                                container.removeChild(computerGameCard);

                                let gameWinnerContainer = document.createElement("div");
                                let crownImage = document.createElement("img");
                                let restartGameButton = document.createElement("button");

                                crownImage.setAttribute("src", "./images/crown.png");
                                crownImage.setAttribute("alt", "Crown");
                                crownImage.setAttribute("width", "100px");
                                crownImage.setAttribute("height", "100px");
                            
                                restartGameButton.textContent = "PLAY AGAIN";

                                gameWinnerContainer.classList.add("game_winner");
                                restartGameButton.classList.add("start_button");

                                gameWinnerContainer.appendChild(crownImage);
                                gameWinnerContainer.appendChild(userImage);

                                container.appendChild(gameWinnerContainer);
                                container.appendChild(restartGameButton);

                                restartGameButton.addEventListener("click", () => {
                                    container.removeChild(gameWinnerContainer);
                                    container.removeChild(restartGameButton);
                                    container.appendChild(startButton);
                                });
                            }
                            else
                            {
                                userGameCard.style["background-color"] = "rgb(127, 255, 212)";
                                computerGameCard.style["background-color"] = "rgb(220, 87, 87)";
                                userImg.style.transform = "scale(1.15)";
                                compImg.style.transform = "scale(1.15)";
                                userScore.textContent = "Score: " + playerScore;
                                computerScore.textContent = "Score: " + compScore;

                                setTimeout(() => {
                                    isClicked = false;
                                    userGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                    computerGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                    userImg.style.transform = "scale(1)";
                                    compImg.style.transform = "scale(1)";
                                }, 1500);
                            }
                            break;

                        case "paper":
                            userGameCard.style["background-color"] = "rgb(100, 149, 237)";
                            computerGameCard.style["background-color"] = "rgb(100, 149, 237)";
                            userImg.style.transform = "scale(1.15)";
                            compImg.style.transform = "scale(1.15)";

                            setTimeout(() => {
                                isClicked = false;
                                userGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                computerGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                userImg.style.transform = "scale(1)";
                                compImg.style.transform = "scale(1)";
                            }, 1500);
                            break;

                        case "scissors":
                            compScore++;
                            if(compScore === 5)
                            {
                                container.removeChild(userGameCard);
                                container.removeChild(computerGameCard);

                                let gameWinnerContainer = document.createElement("div");
                                let crownImage = document.createElement("img");
                                let restartGameButton = document.createElement("button");

                                crownImage.setAttribute("src", "./images/crown.png");
                                crownImage.setAttribute("alt", "Crown");
                                crownImage.setAttribute("width", "100px");
                                crownImage.setAttribute("height", "100px");
                            
                                restartGameButton.textContent = "PLAY AGAIN";

                                gameWinnerContainer.classList.add("game_winner");
                                restartGameButton.classList.add("start_button");

                                gameWinnerContainer.appendChild(crownImage);
                                gameWinnerContainer.appendChild(computerImage);

                                container.appendChild(gameWinnerContainer);
                                container.appendChild(restartGameButton);

                                restartGameButton.addEventListener("click", () => {
                                    container.removeChild(gameWinnerContainer);
                                    container.removeChild(restartGameButton);
                                    container.appendChild(startButton);
                                });
                            }
                            else
                            {
                                userGameCard.style["background-color"] = "rgb(220, 87, 87)";
                                computerGameCard.style["background-color"] = "rgb(127, 255, 212)";
                                userImg.style.transform = "scale(1.15)";
                                compImg.style.transform = "scale(1.15)";
                                userScore.textContent = "Score: " + playerScore;
                                computerScore.textContent = "Score: " + compScore;

                                setTimeout(() => {
                                    isClicked = false;
                                    userGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                    computerGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                    userImg.style.transform = "scale(1)";
                                    compImg.style.transform = "scale(1)";
                                }, 1500);
                            }
                            break;
                    }
                    break;

                case "scissors":
                    switch(compSymbol)
                    {
                        case "rock":
                            compScore++;
                            if(compScore === 5)
                            {
                                container.removeChild(userGameCard);
                                container.removeChild(computerGameCard);

                                let gameWinnerContainer = document.createElement("div");
                                let crownImage = document.createElement("img");
                                let restartGameButton = document.createElement("button");

                                crownImage.setAttribute("src", "./images/crown.png");
                                crownImage.setAttribute("alt", "Crown");
                                crownImage.setAttribute("width", "100px");
                                crownImage.setAttribute("height", "100px");
                            
                                restartGameButton.textContent = "PLAY AGAIN";

                                gameWinnerContainer.classList.add("game_winner");
                                restartGameButton.classList.add("start_button");

                                gameWinnerContainer.appendChild(crownImage);
                                gameWinnerContainer.appendChild(computerImage);

                                container.appendChild(gameWinnerContainer);
                                container.appendChild(restartGameButton);

                                restartGameButton.addEventListener("click", () => {
                                    container.removeChild(gameWinnerContainer);
                                    container.removeChild(restartGameButton);
                                    container.appendChild(startButton);
                                });
                            }
                            else
                            {
                                userGameCard.style["background-color"] = "rgb(220, 87, 87)";
                                computerGameCard.style["background-color"] = "rgb(127, 255, 212)";
                                userImg.style.transform = "scale(1.15)";
                                compImg.style.transform = "scale(1.15)";
                                userScore.textContent = "Score: " + playerScore;
                                computerScore.textContent = "Score: " + compScore;

                                setTimeout(() => {
                                    isClicked = false;
                                    userGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                    computerGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                    userImg.style.transform = "scale(1)";
                                    compImg.style.transform = "scale(1)";
                                }, 1500);
                            }
                            break;

                        case "paper":
                            playerScore++;
                            if(playerScore === 5)
                            {
                                container.removeChild(userGameCard);
                                container.removeChild(computerGameCard);

                                let gameWinnerContainer = document.createElement("div");
                                let crownImage = document.createElement("img");
                                let restartGameButton = document.createElement("button");

                                crownImage.setAttribute("src", "./images/crown.png");
                                crownImage.setAttribute("alt", "Crown");
                                crownImage.setAttribute("width", "100px");
                                crownImage.setAttribute("height", "100px");
                            
                                restartGameButton.textContent = "PLAY AGAIN";

                                gameWinnerContainer.classList.add("game_winner");
                                restartGameButton.classList.add("start_button");

                                gameWinnerContainer.appendChild(crownImage);
                                gameWinnerContainer.appendChild(userImage);

                                container.appendChild(gameWinnerContainer);
                                container.appendChild(restartGameButton);

                                restartGameButton.addEventListener("click", () => {
                                    container.removeChild(gameWinnerContainer);
                                    container.removeChild(restartGameButton);
                                    container.appendChild(startButton);
                                });
                            }
                            else
                            {
                                userGameCard.style["background-color"] = "rgb(127, 255, 212)";
                                computerGameCard.style["background-color"] = "rgb(220, 87, 87)";
                                userImg.style.transform = "scale(1.15)";
                                compImg.style.transform = "scale(1.15)";
                                userScore.textContent = "Score: " + playerScore;
                                computerScore.textContent = "Score: " + compScore;

                                setTimeout(() => {
                                    isClicked = false;
                                    userGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                    computerGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                    userImg.style.transform = "scale(1)";
                                    compImg.style.transform = "scale(1)";
                                }, 1500);
                            }
                            break;

                        case "scissors":
                            userGameCard.style["background-color"] = "rgb(100, 149, 237)";
                            computerGameCard.style["background-color"] = "rgb(100, 149, 237)";
                            userImg.style.transform = "scale(1.15)";
                            compImg.style.transform = "scale(1.15)";

                            setTimeout(() => {
                                isClicked = false;
                                userGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                computerGameCard.style["background-color"] = "rgb(248, 248, 255)";
                                userImg.style.transform = "scale(1)";
                                compImg.style.transform = "scale(1)";
                            }, 1500);
                            break;
                    }
                    break;
            }

        });
    }
    container.appendChild(userGameCard);
    container.appendChild(computerGameCard);
});