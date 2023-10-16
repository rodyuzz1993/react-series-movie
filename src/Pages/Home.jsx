import React, { useState, useEffect } from 'react'
import AllMovies from '../Components/AllMovies'
const Home = () => {
  const [series, setSeries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setSeries(data))
      .catch(error => console.log(error))
  }, [])

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
  }

  const filterredSeries = series.filter(serie => {
    return serie.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <>
      <section id='HomeMovie'>
        <article id='HomeTxt'>
          <h1>Buscador de películas</h1>
          <h2>¿Qué deseas ver?</h2>
          <h2>En esta página encontrarás infinidad de series y películas</h2>
          <h2>para disfrutar en familia</h2>
        </article>
        <article id='HomeBuscador'>
          <input
            type='text'
            placeholder='¿Qué deseas buscar?'
            name='search'
            value={searchTerm}
            onChange={handleInputChange}
          />
        </article>
      </section>
      <article id='AllMovies'>

        {filterredSeries.map(serie => (
          <AllMovies
            key={serie.id}
            id={serie.id}
            TipoPelicula={serie.genres[0]}
            TituloPelicula={serie.name}
            Rating={serie.rating.average}
            Estreno={serie.premiered}
            UrlImg={serie.image.original}
          />
        ))}
      </article>
    </>
  )
}

export default Home
