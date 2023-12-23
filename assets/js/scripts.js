/* jshint esversion: 11 */

// global variables
const sectionWelcome = document.getElementById("welcome");
const sectionQuiz = document.getElementById("quiz");
const selectedGameSpan = document.getElementById("game-selected");
const dialogs = document.querySelectorAll("dialog");
const btnOpenRules = document.getElementById("modal-open-rules");
const btnOpenModals = document.querySelectorAll(".modal-open");
const btnCloseModals = document.querySelectorAll(".modal-close");
const btnRestart = document.getElementById("restart");
const polaroids = document.querySelectorAll(".polaroid");
const spanCountry = document.getElementById("country");
const questionResults = document.getElementById("question-results");
const spanUserSelection = document.getElementById("user-selection");
const spanUserResult = document.getElementById("user-result");

let flagsContainer = document.getElementById("flags");
let selectedGame, selectedCountries, classToAdd, iconToAdd;
let currentCountryIndex = 0;

// loop modals-open btns and listen for user click events
btnOpenModals.forEach(btn => {
    btn.addEventListener("click", function() {
        // grab the data-modal="" value of the clicked element
        let selectedBtn = this.dataset.modal;
        let selectedModal = document.getElementById(selectedBtn);
        openModal(selectedModal);
    });
});

// loop modals-close btn clicks to close all dialogs
btnCloseModals.forEach(btn => {
    btn.addEventListener("click", function() {
        closeModals();
    });
});

function openModal(selectedModal) {
    // open the selected dialog
    selectedModal.showModal();
}

function closeModals() {
    // loop through each dialog and close them
    dialogs.forEach(dialog => {
        dialog.classList.add("slideUp");
        // close once the slide effect has stopped
        dialog.addEventListener("animationend", function() {
            dialog.classList.remove("slideUp");
            dialog.close();
            dialog.removeEventListener("animationend",  arguments.callee, false);
        }, false);
    });
}

btnRestart.addEventListener("click", function() {
    // reload the page entirely
    location.reload();
});

// loop through each polaroid and listen for a click event
polaroids.forEach(polaroid => {
    polaroid.addEventListener("click", function() {
        // grab the id from the clicked polaroid
        selectedGame = this.dataset.game;
        selectedGameSpan.innerText = `Difficulty: ${selectedGame}`;
        startGame();
    });
});

// timer
const progress = document.getElementById("progress");
const timeLeftSpan = document.getElementById("time-left");
let timeLeft, timer;
let timeLeftWidth = 100;

function startTimer() {
    timeLeft = 10;
    timer = setInterval(function () {
        countdown(timeLeft);
    }, 1000);
}

function countdown(seconds) {
    if (seconds === 0) {
        clearInterval(timer);
        disableFlags();
        timeLeftSpan.innerHTML = "0";
    } else {
        timeLeftWidth = timeLeftWidth - (100 / 10);
        timeLeft -= 1;
        timeLeftSpan.innerHTML = timeLeft;
        progress.style.width = timeLeftWidth + "%";
        if (timeLeft >= 7) {
            progress.style.backgroundColor = "#66c2a5";
        } else if (timeLeft >= 4) {
            progress.style.backgroundColor = "#fee08b";
        } else {
            progress.style.backgroundColor = "#d53e4f";
        }
    }
}

function startGame() {
    // hide the welcome area and game selection
    sectionWelcome.classList.add("hide");
    // unhide the quiz section & restart button
    sectionQuiz.classList.remove("hide");
    btnRestart.classList.remove("disable");

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
    console.log(selectedCountries); // TODO: remove

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
    // start the timer
    startTimer();

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
    // this is to allow disabling additional guesses, but including hover/animation effects
    clearInterval(timer);
    let clickedFlag;
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
    // check if the user's selected choice matches the current country's data
    let countryClicked = clickedFlag.src.slice(-6, -4);  // grab the iso from clicked flag

    questionResults.classList.remove("invisible");
    let clickedFlagCountry = selectedCountries.find(country => country.iso === countryClicked);

    if (countryClicked == selectedCountries[currentCountryIndex].iso) {
        // is correct
        classToAdd = "correct";
        iconToAdd = "fa-solid fa-square-check fa-xl";
    } else {
        // is not correct
        classToAdd = "incorrect";
        iconToAdd = "fa-solid fa-circle-xmark fa-xl";

        clickedFlag.parentElement.classList.add("incorrect");
    }

    // update the visible display to the user of their results
    spanUserSelection.innerHTML = `<span class="${classToAdd}">${clickedFlagCountry.name}</span>`;
    spanUserResult.innerHTML = `<span class="${classToAdd}">${classToAdd.toUpperCase()} <i class="${iconToAdd}"></i></span>`;

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

function removeBgColor() {
    // remove "correct"/"incorrect" bg-colors from figcaptions
    let figcaptions = document.querySelectorAll("#flags figure figcaption");
    figcaptions.forEach(caption => {
        caption.classList.remove("correct");
        caption.classList.remove("incorrect");
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

function enableFlags() {
    // remove correct/incorrect bg-colors
    removeBgColor();
    // loop through each flag element and re-enable clicking
    let flagImgs = document.querySelectorAll(".flag-container img");
    flagImgs.forEach(img => {
        img.parentElement.classList.add("hover");
        img.classList.remove("disable");
    });
}