/* jshint esversion: 11 */

// global variables
const sectionWelcome = document.getElementById("welcome");
const sectionQuiz = document.getElementById("quiz");
const dialogs = document.querySelectorAll("dialog");
const btnOpenRules = document.getElementById("modal-open-rules");
const btnOpenModals = document.querySelectorAll(".modal-open");
const btnCloseModals = document.querySelectorAll(".modal-close");
const btnRestart = document.getElementById("restart");
const polaroids = document.querySelectorAll(".polaroid");
const spanCountry = document.getElementById("country");

let flagsContainer = document.getElementById("flags");
let selectedGame;
let selectedCountries;
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
        startGame();
    });
});

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

