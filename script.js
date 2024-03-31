//your JS code here. If required.
// script.js

document.addEventListener("DOMContentLoaded", function() {
    var element = document.getElementById("level");
    var level = 0;

    while (element !== document.documentElement) {
        element = element.parentNode;
        level++;
    }

    alert("The level of the element is: " + level);
});
