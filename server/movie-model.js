/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

   const movies = {
        "1": {
            imdbID: "1",
            "Title": "The Curious Case of Benjamin Button",
            "Released": "2008-12-25",
            "Runtime": 166,
            "Genres": ["Drama", "Fantasy", "Romance"],
            "Directors": ["David Fincher"],
            "Writers": ["Eric Roth", "Robin Swicord", "F. Scott Fitzgerald"],
            "Actors": ["Brad Pitt", "Cate Blanchett", "Tilda Swinton"],
            "Plot": "Benjamin Button, born in 1918 with the physical state of an elderly man, ages in reverse.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYjIyNDExOWItM2Y4ZC00NmY3LWFlN2ItYTJlZDQ1NTJlZTUwXkEyXkFqcGc@._V1_SX300.jpg",
            "Metascore": 70,
            "imdbRating": 7.8
        },
        "2": {
            imdbID: "2",
            "Title": "Ocean's Eight",
            "Released": "2018-06-08",
            "Runtime": 110,
            "Genres": ["Action", "Comedy", "Crime"],
            "Directors": ["Gary Ross"],
            "Writers": ["Gary Ross", "Olivia Milch", "George Clayton Johnson"],
            "Actors": ["Sandra Bullock", "Cate Blanchett", "Anne Hathaway"],
            "Plot": "Debbie Ocean gathers an all-female crew to attempt an impossible heist.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_SX300.jpg",
            "Metascore": 61,
            "imdbRating": 6.3
        },
        "3": {
            imdbID: "3",
            "Title": "Thor: Ragnarok",
            "Released": "2017-11-03",
            "Runtime": 130,
            "Genres": ["Action", "Adventure", "Comedy"],
            "Directors": ["Taika Waititi"],
            "Writers": ["Eric Pearson", "Craig Kyle", "Christopher L. Yost"],
            "Actors": ["Chris Hemsworth", "Tom Hiddleston", "Cate Blanchett"],
            "Plot": "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg",
            "Metascore": 74,
            "imdbRating": 7.9
}
    };
    module.exports = {movies};
