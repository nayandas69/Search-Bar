const searchBarContainerEl = document.querySelector(".search-bar-container");
const searchIconEl = document.querySelector(".search-icon");
const inputEl = document.querySelector(".input");

// Toggle the search bar's visibility when the search icon is clicked
searchIconEl.addEventListener("click", () => {
    searchBarContainerEl.classList.toggle("active");
    if (searchBarContainerEl.classList.contains("active")) {
        inputEl.focus(); // Focus on the input when the search bar is expanded
    }
});

// Close the search bar if a click happens outside of it
document.addEventListener("click", (e) => {
    if (!searchBarContainerEl.contains(e.target) && !searchIconEl.contains(e.target)) {
        searchBarContainerEl.classList.remove("active"); // Ensures the search bar is collapsed
    }
});
