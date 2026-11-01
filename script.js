
// Welcome message when the page loads
window.addEventListener("load", function () {
    console.log("Welcome to Spice Garden!");
});

// Display a message when a menu item is clicked
const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const foodName = card.querySelector("h3").textContent;
        alert("You selected: " + foodName);
    });
});
