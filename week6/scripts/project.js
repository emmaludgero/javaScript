
const url = 'https://swapi.dev/api/films/'
const starWarsMovies = [];

const output = (starWarsMovies) => {

    starWarsMovies.forEach((movie)=>{

        const article = document.createElement("article")

        const title = document.createElement('h4')
        title.innerHTML = movie.title

        const opening_crawl = document.createElement('p')
        opening_crawl.innerHTML = movie.opening_crawl

        const director = document.createElement('p')
        director.innerHTML = movie.director

        const producer = document.createElement('p')
        producer.innerHTML = movie.producer

        const release_date = document.createElement('p')
        release_date.innerHTML = movie.release_date

        article.appendChild(title)
        article.appendChild(opening_crawl)
        article.appendChild(director)
        article.appendChild(producer)
        article.appendChild(release_date)

        const movieID = document.querySelector("#movies")
        movieID.appendChild(article)

    })
}

async function getMovies(){
    const response = await fetch("https://swapi.dev/api/films/")
    console.log("response", response)
    if (response.ok){
        const starWarsMovies = await response.json();
        console.log("Star Wars Movies List", starWarsMovies)
        output(starWarsMovies)
    }
}

getMovies()