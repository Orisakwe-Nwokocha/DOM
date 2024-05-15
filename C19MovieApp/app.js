// https://api.themoviedb.org/3/movie/157336?api_key=6bdcaad70c4a6e93ada54e4b496a6f0d
// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
// https://api.themoviedb.org/3/search/movie?query="

const API_KEY = "api_key=6bdcaad70c4a6e93ada54e4b496a6f0d";
const API_URL = "https://api.themoviedb.org/3/movie";
const MOVIE_URL = `${API_URL}/popular?${API_KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?query=";

console.log(MOVIE_URL)

const getMovies = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            showMovies(data.results);
        })
        .catch(error => console.log(error));
};

getMovies(MOVIE_URL);

const movieContainer = document.querySelector(".movie-container");

const showMovies = (movies) => {
    const images = [
        "images/Godzilla1.jpg",
        "images/9781250353078.jpg",
        "images/dune.webp"
    ]

    let counter = 0;
    movies.forEach(movie => {
        const {overview, poster_path, title, vote_average} = movie;

        const divTag = document.createElement("div");
        divTag.classList.add("movie-details");
        divTag.innerHTML = `
            <img src=${IMAGE_URL}${poster_path} alt="movie poster">
                <div class="movie-title">
                    <p>${title}</p>
                    <p>${vote_average}</p>
                </div>
                <h2>Overview</h2>
                <p>${overview}</p>
            `;

        movieContainer.appendChild(divTag);
    });
};


const search = document.forms["search"];
search.addEventListener("keyup", (event) => {
    event.preventDefault();
    let searchValue = event.target.value;
    const url = SEARCH_URL + searchValue + "&" + API_KEY;

    if (searchValue) {
        movieContainer.innerHTML = "";
        getMovies(url);
    }

    else {
        movieContainer.innerHTML = "";
        getMovies(MOVIE_URL);
    }

});
