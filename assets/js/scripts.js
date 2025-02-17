/* jshint esversion: 11 */

// global variables
const sectionWelcome = document.getElementById("welcome");
const sectionQuiz = document.getElementById("quiz-section");
const sectionFinalResults = document.getElementById("final-results");
const sectionStudy = document.getElementById("study-section");
const sectionScores = document.getElementById("scores-section");
const selectedGameSpan = document.getElementById("game-selected");
const btnOpenModals = document.querySelectorAll(".modal-open");
const btnCloseModals = document.querySelectorAll(".modal-close");
const btnStudy = document.getElementById("study-btn");
const btnRestart = document.getElementById("restart-btn");
const btnNext = document.getElementById("next-btn");
const btnResults = document.getElementById("results-btn");
const btnScores = document.getElementById("scores-btn");
const btnReset = document.querySelectorAll(".reset-score");
const polaroids = document.querySelectorAll(".polaroid");
const spanCountry = document.getElementById("country");
const spanQuestionNumbers = document.querySelectorAll(".question-number");
const spanTotalQuestions = document.getElementById("total-questions");
const spanUserSelection = document.getElementById("user-selection");
const spanUserResult = document.getElementById("user-result");
const spanTotalCorrect = document.getElementById("total-correct");
const spanTotalIncorrect = document.getElementById("total-incorrect");
const spanTotalPoints = document.getElementById("total-points");
const questionResults = document.getElementById("question-results");
const progress = document.getElementById("progress");
const spanTimeLeft = document.getElementById("time-left");
const spanTimeSpentMin = document.getElementById("time-spent-min");
const spanTimeSpentSec = document.getElementById("time-spent-sec");
const spanTotalCountries = document.getElementById("total-countries");

let flagsContainer = document.getElementById("flags");
let resultsContainer = document.getElementById("results-container");
let studyContainer = document.getElementById("study-container");
let selectedGame, selectedCountries, timeLeft, timerDown, timerUp;
let pauseTimer = false;
let timeLeftWidth = 100;
let maxQuestions = 10;
let userPoints = 0;
let totalCorrect = 0;
let totalIncorrect = 0;
let totalMinutes = 0;
let totalSeconds = 0;
let gameMin = 0;
let gameSec = 0;
let currentCountryIndex = 0;

// display total flag count
spanTotalCountries.innerText = countries.length;

// loop modals-open btns and listen for user click events
btnOpenModals.forEach(btn => {
    btn.addEventListener("click", function () {
        // grab the data-modal="" value of the clicked element
        let selectedBtn = this.dataset.modal;
        let selectedModal = document.getElementById(selectedBtn);
        openModal(selectedModal);
    });
});

// loop modals-close btns and listen for user click events
btnCloseModals.forEach(btn => {
    btn.addEventListener("click", function () {
        // grab the data-modal="" value of the clicked element
        let selectedBtn = this.dataset.modal;
        let selectedModal = document.getElementById(selectedBtn);
        closeModal(selectedModal);
    });
});

function openModal(selectedModal) {
    // open the selected dialog
    selectedModal.showModal();
}

function closeModal(selectedModal) {
    // close the selected dialog
    selectedModal.classList.add("slideUp");
    // slide back up, then close off-screen
    setTimeout(() => {
        selectedModal.classList.remove("slideUp");
        selectedModal.close();
    }, 450); // CSS animation = 0.5s // close just before finishing to avoid slight glitch
}

btnRestart.addEventListener("click", restartGame);

function restartGame() {
    // reset everything, similar to location.reload();
    // disable.enable buttons
    btnScores.classList.remove("disable");
    btnRestart.classList.add("disable");
    btnStudy.classList.remove("disable");
    // hide elements
    sectionQuiz.classList.add("hide");
    sectionStudy.classList.add("hide");
    sectionFinalResults.classList.add("hide");
    sectionWelcome.classList.remove("hide");
    sectionScores.classList.add("hide");
    questionResults.classList.add("hide");
    btnResults.classList.add("hide");
    clearInterval(timerDown);
    clearInterval(timerUp);
    // reset values
    currentCountryIndex = 0;
    timeLeftWidth = 100;
    userPoints = 0;
    totalCorrect = 0;
    totalIncorrect = 0;
    totalMinutes = 0;
    totalSeconds = 0;
    pauseTimer = false;
    spanTimeLeft.innerText = "10";
    progress.style.width = timeLeftWidth + "%";
    spanTimeSpentMin.innerText = "0m";
    spanTimeSpentSec.innerText = "0s";
    selectedGame = "None";
    selectedGameSpan.innerText = selectedGame;
    progress.style.backgroundColor = "#00ED96";
    spanTimeLeft.style.backgroundColor = "#00ED96";
    flagsContainer.innerText = "";
    resultsContainer.innerText = "";
}

// loop through each polaroid and listen for a click event
polaroids.forEach(polaroid => {
    polaroid.addEventListener("click", function () {
        // grab the id from the clicked polaroid
        selectedGame = this.dataset.game;
        selectedGameSpan.innerText = selectedGame;
        startGame();
    });
});

// interval: counting down
function startCountDown() {
    // start the countDown interval;
    timeLeft = 10;
    timerDown = setInterval(function () {
        countDown(timeLeft);
    }, 1000);
}

// countDown
function countDown(seconds) {
    // count down from 10, and reduce the progress bar by 10%
    if (seconds === 0) {
        // time ran out, stop everything
        disableFlags();
        spanTimeLeft.innerHTML = "00";
        checkAnswer(null);
    } else {
        // still time remaining, continue counting down
        timeLeftWidth = timeLeftWidth - (100 / 10);
        progress.style.width = timeLeftWidth + "%";
        timeLeft -= 1;
        spanTimeLeft.innerHTML = `0${timeLeft}`;
        // dynamically alter the color based on time remaining
        // can also do "switch (true) {case}" example
        if (timeLeft >= 7) {
            progress.style.backgroundColor = "#00ED96";
            spanTimeLeft.style.backgroundColor = "#00ED96";
        } else if (timeLeft >= 4) {
            progress.style.backgroundColor = "#FFDF00";
            spanTimeLeft.style.backgroundColor = "#FFDF00";
        } else {
            progress.style.backgroundColor = "#FF002E";
            spanTimeLeft.style.backgroundColor = "#FF002E";
        }
    }
}

// interval: counting up
function startCountUp() {
    timerUp = setInterval(function () {
        if (!pauseTimer) {
            ++totalSeconds;
            gameMin = parseInt(totalSeconds / 60) + "m";
            gameSec = addZero(totalSeconds % 60) + "s";  // add leading zero?
            spanTimeSpentMin.innerText = gameMin;
            spanTimeSpentSec.innerText = gameSec;
        }
    }, 1000);
}

function addZero(sec) {
    // if seconds is 1-9, add leading 0
    let secs = sec + "";
    return secs = (secs.length < 2) ? `0${secs}` : secs;
}

function startGame() {
    // hide the welcome area and game selection
    sectionWelcome.classList.add("hide");
    // unhide the quiz section & restart button
    sectionQuiz.classList.remove("hide");
    btnRestart.classList.remove("disable");
    // disable the study and scores buttons
    btnStudy.classList.add("disable");
    btnScores.classList.add("disable");

    // setup the list of questions/countries to use
    if (selectedGame != "Random" && selectedGame != "Beast") {
        // filter-out by selected region/continent if not playing "random" or "beast mode"
        // https://stackoverflow.com/a/69091932
        selectedCountries = countries.filter(country => country.region.includes(selectedGame));
    } else {
        // "random" & "beast mode" grabs all countries from the array
        selectedCountries = countries;
    }

    // set the maximum number of flags to play
    switch (selectedGame) {
        case "Beast":
            maxQuestions = countries.length;
            break;
        case "Random":
            maxQuestions = 25;
            break;
        default:
            maxQuestions = 10;
            break;
    }

    // call function to shuffle the selectedCountries
    shuffleCountries(selectedCountries);

    // display the total number of flag questions
    spanTotalQuestions.innerText = maxQuestions;

    // start the timerUp countup
    startCountUp();
    generateQuestion();
}

function shuffleCountries(selectedCountries) {
    // randomly shuffle the array of selectedCountries
    return selectedCountries.sort(() => Math.random() - 0.5);
}

function shuffleOptions(options) {
    // randomly shuffle the array of options for the given country
    return options.sort(() => Math.random() - 0.5);
}

function generateQuestion() {
    // start the timerDown countDown
    startCountDown();

    // display the current question number
    spanQuestionNumbers.forEach(span => {
        span.innerText = currentCountryIndex + 1;
    });

    // start populating the question and flag options
    spanCountry.innerText = selectedCountries[currentCountryIndex].name;

    let countryOptions;
    if (selectedGame == "Beast") {
        // beast mode! choose only the options from the current flag data
        countryOptions = shuffleOptions(selectedCountries[currentCountryIndex].options);
    } else if (selectedGame == "Random") {
        // grab 3 other random countries from ALL regions
        let ignoreCountry = [selectedCountries[currentCountryIndex].name];  // ignore the current question's country
        let tempCountries = selectedCountries.filter(country => !ignoreCountry.includes(country.name));  // filter to exclude current country
        let tempShuffle = tempCountries.sort(() => Math.random() - 0.5);  // shuffle the new array
        let randomThree = tempShuffle.slice(0, 3);  // grab the first 3 only
        let newOptions = [selectedCountries[currentCountryIndex]];  // push the current country into the new list
        randomThree.forEach(country => {
            // push the 3 new random countries into the list as well
            newOptions.push(country);
        });
        // shuffle the new list of random countries
        countryOptions = shuffleOptions(newOptions);
    } else {
        // grab 3 other random countries from the SELECTED region
        let ignoreCountry = [selectedCountries[currentCountryIndex].name];  // ignore the current question's country
        // filter to exclude current country, but only from the selected region
        let tempCountries = selectedCountries.filter(country => !ignoreCountry.includes(country.name)).filter(country => country.region.includes(selectedGame));
        let tempShuffle = tempCountries.sort(() => Math.random() - 0.5);  // shuffle the new array
        let randomThree = tempShuffle.slice(0, 3);  // grab the first 3 only
        let newOptions = [selectedCountries[currentCountryIndex]];  // push the current country into the new list
        randomThree.forEach(country => {
            // push the 3 new random countries into the list as well
            newOptions.push(country);
        });
        // shuffle the new list of random countries
        countryOptions = shuffleOptions(newOptions);
    }

    countryOptions.forEach(country => {
        // TODO: this code will not work because it cannot apply an eventListener (important to showcase)
        // flagsContainer.innerHTML += `
        //     <figure class="flag-container">
        //         <img src="assets/images/flags/${country.iso}.svg" alt="random flag">
        //         <figcaption>
        //             <span>${country.name}</span>
        //         </figcaption>
        //     </figure>
        // `;

        let figure = document.createElement("figure");
        figure.classList.add("flag-container");
        let img = document.createElement("img");
        img.src = `assets/images/flags/${country.iso}.svg`;
        img.alt = "random flag";
        figure.appendChild(img);
        let span = document.createElement("span");
        span.innerText = country.name;
        let figcaption = document.createElement("figcaption");
        figcaption.appendChild(span);
        figure.appendChild(figcaption);
        flagsContainer.appendChild(figure);
        figure.addEventListener("click", userClickedFlag);
    });
}

function userClickedFlag(e) {
    // user selected something - verify that it's the figure or the image
    let clickedFlag;
    // this is to allow disabling additional guesses, but including hover/animation effects
    // identify what the user clicked (figure or img)
    if (e.target.nodeName == "FIGURE") {
        // use the <img> from the figure
        clickedFlag = this.getElementsByTagName("img")[0];
        checkAnswer(clickedFlag);
        disableFlags();
    } else if (e.target.nodeName == "IMG") {
        // use the clicked <img>
        clickedFlag = e.target;
        checkAnswer(clickedFlag);
        disableFlags();
    }
}

function checkAnswer(clickedFlag) {
    // stop the countDown
    clearInterval(timerDown);
    // pause the countUp
    pauseTimer = true;

    let countryClicked, classToAdd, pointsToAdd, isPlural;
    if (clickedFlag != null) {
        // grab the iso from clicked flag (if not null)
        countryClicked = clickedFlag.src.slice(-6, -4);
    }

    // check if the user's selected choice matches the current country's data
    if (countryClicked == selectedCountries[currentCountryIndex].iso) {
        // is correct
        totalCorrect++;
        classToAdd = "correct";
        // increment the user's point value with the remaining time left on the countDown
        pointsToAdd = timeLeft;
        userPoints += pointsToAdd;
    } else {
        // is not correct
        totalIncorrect++;
        classToAdd = "incorrect";
        pointsToAdd = 0;
    }

    // update the visible display to the user of their results
    if (clickedFlag == null) {
        // user didn't click anything
        spanUserSelection.innerText = "nothing";
    } else {
        let clickedFlagCountry = selectedCountries.find(country => country.iso === countryClicked);
        spanUserSelection.innerText = clickedFlagCountry.name;
    }
    spanUserResult.innerHTML = `<span class="${classToAdd}">${classToAdd.toUpperCase()}</span>.`;
    // show the results to the user
    questionResults.classList.remove("hide");

    // append the result of this question to the final-results list
    isPlural = pointsToAdd != 1 ? "s" : "";  // TODO: show single-line ternary operator
    // build a result-row for each round/question
    resultsContainer.innerHTML += `
    <div class="result-row txt-white">
        <div class="result-row-content">
            <h3 class="modal-open" data-modal="study" data-country="${selectedCountries[currentCountryIndex].name}" data-iso="${selectedCountries[currentCountryIndex].iso}">
                <span class="txt-yellow">${currentCountryIndex + 1}.</span>
                ${selectedCountries[currentCountryIndex].name}
            </h3>
            <small class="badge ${classToAdd}">${pointsToAdd} point${isPlural}</small>
        </div>
    </div>`;

    // only proceed if there are more questions to cycle
    if (currentCountryIndex + 1 === maxQuestions) {
        // there are no more questions - stop the timer
        clearInterval(timerUp);
        btnResults.classList.remove("hide");
    } else {
        // there are more questions - keep going / show the next button
        btnNext.classList.remove("hide");
    }
}

btnNext.addEventListener("click", resetQuestion);

function resetQuestion() {
    // resume the countUp
    pauseTimer = false;
    // reset progress bar
    timeLeftWidth = 100;
    progress.style.backgroundColor = "#00ED96";
    progress.style.width = timeLeftWidth + "%";
    // hide elements
    btnNext.classList.add("hide");
    questionResults.classList.add("hide");
    // increment array index +1
    currentCountryIndex++;
    // reset time left and styles
    spanTimeLeft.innerHTML = "10";
    spanTimeLeft.style.backgroundColor = "#00ED96";
    // empty the previous values
    flagsContainer.innerHTML = "";
    spanUserSelection.innerText = "";
    spanUserResult.innerHTML = "";
    // grab the next question
    generateQuestion();
}

btnResults.addEventListener("click", showResults);

function showResults() {
    // pause the countUp
    pauseTimer = true;
    // shows the user their results (update correct/incorrect/total points)
    spanTotalCorrect.innerText = totalCorrect;
    spanTotalIncorrect.innerText = totalIncorrect;
    spanTotalPoints.innerText = userPoints;
    btnScores.classList.remove("disable");
    sectionFinalResults.classList.remove("hide");
    sectionQuiz.classList.add("hide");

    // game is over - update the localStorage scoring
    saveScores();
}

function saveScores() {
    // save the score, duration, date, number of times played
    const selectedRegion = selectedGame.toLowerCase();
    const vexillumKey = "vexill-uhm";

    // fetch any existing data from localStorage (or initialize an empty object)
    let vexillumData = JSON.parse(localStorage.getItem(vexillumKey)) || {};

    // check if the current region data exists; if not, initialize it
    let regionData = vexillumData[selectedRegion] || {
        "score": 0,
        "duration": "",
        "date": "",
        "played": 0
    };

    // update the regional data
    if (userPoints >= regionData.score) {
        // the player's score is higher; update everything
        regionData = {
            "score": userPoints,
            "duration": `${gameMin} ${gameSec}`,
            "date": new Date().toLocaleDateString("en-GB", {
                "day": "2-digit",
                "month": "short",
                "year": "numeric"
            }),
            "played": regionData.played + 1
        };
    } else {
        // no high score; retain previous high score, but update number of times played
        regionData.played += 1;
    }

    // save the updated region data back to the main object
    vexillumData[selectedRegion] = regionData;

    // store the updated data in localStorage
    localStorage.setItem(vexillumKey, JSON.stringify(vexillumData));
}

function addBgColor() {
    // add "correct"/"incorrect" bg-colors to the respective figcaptions
    let correctCountry = selectedCountries[currentCountryIndex].name;
    let figSpans = document.querySelectorAll("#flags figure figcaption span");
    figSpans.forEach(span => {
        if (span.textContent === correctCountry) {
            span.parentElement.classList.add("bg-green", "txt-black");
        } else {
            span.parentElement.classList.add("bg-red", "txt-white");
        }
    });
}

function disableFlags() {
    // apply correct/incorrect bg-colors
    addBgColor();
    // loop through each flag element and disable clicking
    let flagImgs = document.querySelectorAll(".flag-container img");
    flagImgs.forEach(img => {
        img.parentElement.classList.add("hover");
        img.classList.add("disable");
    });
}

generateStudy();

function generateStudy() {
    // generate a dynamic list of all countries on page load
    countries.forEach(country => {
        studyContainer.innerHTML += `
            <div class="study-row txt-white modal-open" data-modal="study" data-country="${country.name}" data-iso="${country.iso}">
                ${country.name}
            </div>`;
    });
}

btnStudy.addEventListener("click", showStudySection);

function showStudySection() {
    // disable the study button and show it
    btnStudy.classList.add("disable");
    sectionStudy.classList.remove("hide");
    // hide the other sections
    sectionWelcome.classList.add("hide");
    sectionScores.classList.add("hide");
    // enable the other buttons
    btnRestart.classList.remove("disable");
    btnScores.classList.remove("disable");
}

// listen to a user clicking within the studyContainer
// won't work in forloop of modal-open elements since these are added dynamically after DOM content loaded
// https://stackoverflow.com/a/67765423
let flagContainers = [studyContainer, resultsContainer];
flagContainers.forEach(container => {
    container.addEventListener("click", function (e) {
        if (e.target.classList.contains("modal-open")) {
            showFlagModal(e);
        }
    });
});

function showFlagModal(e) {
    // display dialog/modal with specific flag/country clicked
    let countryName = e.target.dataset.country;
    let countryIso = e.target.dataset.iso;
    let studyModalName = document.getElementById("study-name");
    let studyModalFlag = document.getElementById("study-flag");
    let studyModal = document.getElementById("study");
    studyModalName.innerText = countryName;
    studyModalFlag.src = `assets/images/flags/${countryIso}.svg`;
    studyModalFlag.alt = `Flag of ${countryName}`;
    studyModal.showModal();
}

btnScores.addEventListener("click", getScores);

function getScores() {
    // hide other sections
    sectionWelcome.classList.add("hide");
    sectionQuiz.classList.add("hide");
    sectionFinalResults.classList.add("hide");
    sectionStudy.classList.add("hide");
    // enable the other buttons
    btnRestart.classList.remove("disable");
    btnStudy.classList.remove("disable");
    
    // show the scores section / button
    sectionScores.classList.remove("hide");
    btnScores.classList.add("disable");

    const vexillumKey = "vexill-uhm";
    const games = ["africa", "americas", "asia", "europe", "oceania", "random", "beast"];
    const vexillumData = JSON.parse(localStorage.getItem(vexillumKey)) || {};

    // dynamically update the scores table
    let anyScoresExist = false;

    // loop through each game type/region to extract data
    games.forEach(game => {
        const gameData = vexillumData[game];
        let spanGamePoints = document.getElementById(`${game}-points`);
        let spanGameDuration = document.getElementById(`${game}-duration`);
        let spanGameDate = document.getElementById(`${game}-date`);
        let spanGamePlayed = document.getElementById(`${game}-played`);
        let spanGameReset = document.querySelector(`[data-reset="${game}"]`);

        if (gameData) {
            anyScoresExist = true;
            spanGamePoints.innerText = `${gameData.score} pts`;
            spanGamePoints.parentElement.classList.replace("bg-grey", "bg-green");

            spanGameDuration.innerText = gameData.duration;
            spanGameDuration.parentElement.classList.replace("bg-grey", "bg-yellow");

            spanGameDate.innerText = gameData.date.toUpperCase();
            spanGameDate.parentElement.classList.replace("bg-grey", "bg-red");

            spanGamePlayed.innerText = `x ${gameData.played}`;
            spanGamePlayed.parentElement.classList.replace("bg-grey", "bg-white");

            spanGameReset.classList.replace("bg-grey", "bg-black");
        }
    });

    // hide the empty scores message if any scores exist
    const emptyScoresElement = document.getElementById("empty-scores");
    if (anyScoresExist) {
        // scores exist - hide the element
        emptyScoresElement.classList.add("hide");
    } else {
        // no scores exist - show the element
        emptyScoresElement.classList.remove("hide");
    }
}

// reset game score buttons
btnReset.forEach(btn => {
    btn.addEventListener("click", function() {
        // which scores to delete?
        let scoresToDelete = this.dataset.reset;
        resetGameScore(scoresToDelete);
    });
});

function resetGameScore(game) {
    // users can select to reset game scores for individual games/regions
    const vexillumKey = "vexill-uhm";

    // retrieve the existing scores from localStorage
    const vexillumData = JSON.parse(localStorage.getItem(vexillumKey)) || {};

    // check if the selected game exists in the stored data
    if (vexillumData[game]) {
        delete vexillumData[game];

        // save the updated object back to localStorage
        localStorage.setItem(vexillumKey, JSON.stringify(vexillumData));

        let spanGamePoints = document.getElementById(`${game}-points`);
        let spanGameDuration = document.getElementById(`${game}-duration`);
        let spanGameDate = document.getElementById(`${game}-date`);
        let spanGamePlayed = document.getElementById(`${game}-played`);
        let spanGameReset = document.querySelector(`[data-reset="${game}"]`);

        // reset visually
        setTimeout(() => {
            spanGamePoints.innerText = "N/A";
            spanGamePoints.parentElement.classList.replace("bg-green", "bg-grey");
            setTimeout(() => {
                spanGameDuration.innerText = "N/A";
                spanGameDuration.parentElement.classList.replace("bg-yellow", "bg-grey");
                setTimeout(() => {
                    spanGameDate.innerText = "N/A";
                    spanGameDate.parentElement.classList.replace("bg-red", "bg-grey");
                    setTimeout(() => {
                        spanGamePlayed.innerText = "N/A";
                        spanGamePlayed.parentElement.classList.replace("bg-white", "bg-grey");
                        setTimeout(() => {
                            spanGameReset.classList.replace("bg-black", "bg-grey");
                        }, 250);
                    }, 250);
                }, 250);
            }, 250);
        }, 250);
    }
}
