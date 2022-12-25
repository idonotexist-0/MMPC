const dropdownBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', function () {
    dropdownContent.classList.toggle('show');
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});

function myFunction() {
    var x = document.getElementById("global-elements-nav");
    var y = document.getElementById("get-minecraft-btn");
    if (x.className === "global-elements") {
        x.className += " responsive";
        y.className += " responsive";
    } else {
        x.className = "global-elements";
        y.className = "get-minecraft";
    }
}