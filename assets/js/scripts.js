/* jshint esversion: 11 */

// global variables
const sectionWelcome = document.getElementById("welcome");
const btnRestart = document.getElementById("restart");
const polaroids = document.querySelectorAll(".polaroid");
let selectedGame;
let selectedCountries;

btnRestart.addEventListener("click", function() {
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
    console.log(selectedCountries);
}

function shuffleCountries(selectedCountries) {
    // randomly shuffle the array of selectedCountries
    return selectedCountries.sort(() => Math.random() - 0.5);
}