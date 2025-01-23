document.addEventListener("DOMContentLoaded", function () {
  const genreButtons = document.querySelectorAll(".genre-button");
  const movieCards = document.querySelectorAll(".movie-card");

  genreButtons.forEach(button => {
    button.addEventListener("click", function () {
      const selectedGenre = button.getAttribute("data-genre");

      if (selectedGenre === "all") {
        // Show all movie cards when "All" button is clicked
        movieCards.forEach(card => {
          card.style.display = "block";
        });
      } else {
        // Filter and display movie cards based on selected genre
        movieCards.forEach(card => {
          const cardGenres = card.getAttribute("data-genre").split(" ");
          if (cardGenres.includes(selectedGenre)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      }
    });
  });
});
