// Browse button animation
function browseBooks() {
    window.location.href = "ebook-books.html";
}

// Read More Buttons
const readButtons = document.querySelectorAll(".book-card button");

readButtons.forEach(button => {
    button.addEventListener("click", function () {
        alert("Book details will be added soon!");
    });
});