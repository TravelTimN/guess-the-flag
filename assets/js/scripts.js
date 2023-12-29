/* jshint esversion: 11 */

// global variables
const sectionWelcome = document.getElementById("welcome");
const sectionQuiz = document.getElementById("quiz-section");
const sectionFinalResults = document.getElementById("final-results");
const sectionStudy = document.getElementById("study-section");
const selectedGameSpan = document.getElementById("game-selected");
const btnOpenModals = document.querySelectorAll(".modal-open");
const btnCloseModals = document.querySelectorAll(".modal-close");
const btnStudy = document.getElementById("study-btn");
const btnRestart = document.getElementById("restart-btn");
const btnNext = document.getElementById("next-btn");
const btnResults = document.getElementById("results-btn");
const btnScores = document.getElementById("scores-btn");
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
const spanTimeSpent = document.getElementById("time-spent");
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
let currentCountryIndex = 0;

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
    spanTimeLeft.innerText = "10";
    progress.style.width = timeLeftWidth + "%";
    spanTimeSpent.innerText = "0";
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

// timer
function startTimer() {
    // start the timer interval;
    timeLeft = 10;
    timer = setInterval(function () {
        countdown(timeLeft);
    }, 1000);
}

// countdown
function countdown(seconds) {
    // count down from 10, and reduce the progress bar by 10%
    if (seconds === 0) {
        // time ran out, stop everything
        disableFlags();
        clearInterval(timer);
        timeLeftSpan.innerHTML = "00";
        checkAnswer(null);
    } else {
        // still time remaining, continue counting down
        timeLeftWidth = timeLeftWidth - (100 / 10);
        progress.style.width = timeLeftWidth + "%";
        timeLeft -= 1;
        timeLeftSpan.innerHTML = `0${timeLeft}`;
        // dynamically alter the color based on time remaining
        // can also do "switch (true) {case}" example
        if (timeLeft >= 7) {
            progress.style.backgroundColor = "#66c2a5";
            timeLeftSpan.style.backgroundColor = "#66c2a5";
        } else if (timeLeft >= 4) {
            progress.style.backgroundColor = "#fee08b";
            timeLeftSpan.style.backgroundColor = "#fee08b";
        } else {
            progress.style.backgroundColor = "#d53e4f";
            timeLeftSpan.style.backgroundColor = "#d53e4f";
        }
    }
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
    // stop the countDown
    clearInterval(timerDown);
    // pause the countUp
    pauseTimer = true;

    let clickedFlag;
    // user selected something - verify that it's the figure or the image
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
    let countryClicked, classToAdd, iconToAdd, pointsToAdd, isPlural;
    if (clickedFlag != null) {
        // grab the iso from clicked flag (if not null)
        countryClicked = clickedFlag.src.slice(-6, -4);
    }

    // check if the user's selected choice matches the current country's data
    if (countryClicked == selectedCountries[currentCountryIndex].iso) {
        // is correct
        totalCorrect++;
        classToAdd = "correct";
        iconToAdd = "fa-solid fa-square-check fa-xl";

        // increment the user's point value with the remaining time left on the countDown
        pointsToAdd = timeLeft;
        userPoints += pointsToAdd;
    } else {
        // is not correct
        totalIncorrect++;
        classToAdd = "incorrect";
        iconToAdd = "fa-solid fa-circle-xmark fa-xl";
        pointsToAdd = 0;

        if (clickedFlag != null) {
            clickedFlag.parentElement.classList.add("incorrect");
        }
    }

    // update the visible display to the user of their results
    if (clickedFlag == null) {
        // user didn't click anything
        spanUserSelection.innerText = "nothing";
    } else {
        let clickedFlagCountry = selectedCountries.find(country => country.iso === countryClicked);
        spanUserSelection.innerText = clickedFlagCountry.name;
    }
    spanUserResult.innerHTML = `<span class="${classToAdd}">${classToAdd.toUpperCase()} <i class="${iconToAdd}" aria-hidden="true"></i></span>.`;
    // show the results to the user
    questionResults.classList.remove("hide");

    // append the result of this question to the final-results list
    isPlural = pointsToAdd != 1 ? "s" : "";  // TODO: show single-line ternary operator
    // build a result-row for each round/question
    resultsContainer.innerHTML += `
    <div class="result-row">
        <div class="result-row-content">
            <h3><span class="index">${currentCountryIndex + 1}.</span> ${selectedCountries[currentCountryIndex].name}</h3>
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
}

function addBgColor() {
    // add "correct"/"incorrect" bg-colors to the respective figcaptions
    let correctCountry = selectedCountries[currentCountryIndex].name;
    let figSpans = document.querySelectorAll("#flags figure figcaption span");
    figSpans.forEach(span => {
        if (span.textContent === correctCountry) {
            span.parentElement.classList.add("correct");
        } else {
            span.parentElement.classList.add("incorrect");
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

btnStudy.addEventListener("click", generateStudy);

function generateStudy() {
    // when user wants to study the flags, generate a dynamic list of all countries
    countries.forEach(country => {
        studyContainer.innerHTML += `
        <div class="study-row modal-open" data-modal="study" data-country="${country.name}" data-iso="${country.iso}">
            ${country.name}
        </div>`;
    });
    // disable the study button and show it
    btnStudy.classList.add("disable");
    sectionStudy.classList.remove("hide");
    // hide the welcome section
    sectionWelcome.classList.add("hide");
    // enable the restart button
    btnRestart.classList.remove("disable");
}

// listen to a user clicking within the studyContainer
// won't work in forloop of modal-open elements since these are added dynamically after DOM content loaded
// https://stackoverflow.com/a/67765423
studyContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-open")) {
        let countryName = e.target.dataset.country;
        let countryIso = e.target.dataset.iso;
        document.getElementById("study-name").innerText = countryName;
        document.getElementById("study-flag").src = `assets/images/flags/${countryIso}.svg`;
        document.getElementById("study-flag").alt = `Flag of ${countryName}`;
        document.getElementById("study").showModal();
    }
});
