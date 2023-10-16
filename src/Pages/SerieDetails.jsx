import { useParams, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const SerieDetails = () => {
  const [serie, setSerie] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setSerie(data))
      .catch(error => console.log(error))
  }, [id])
  if (!serie) {
    return <div>Cargando...</div>
  }

  return (
    <>
      <article id='DetailTitle'>
        <h1>Detalles de la serie <i>{serie.name}</i></h1>
      </article>
      <article id='DetailImg'>
        <img src={serie.image.original} />
        <div id='DetailMov'>
          {serie.summary}
        </div>
      </article>
      <article id='DetailCard'>
        <span><p>Tipo: </p><p><i>{serie.type}</i></p></span>
        <span><p>Idioma</p><p><i>{serie.language}</i></p></span>
        <span><p>Géneros</p><p><i>{serie.genres[0]}</i></p><p><i>{serie.genres[1]}</i></p><p><i>{serie.genres[2]}</i></p></span>
        <span><p>Estreno</p><p><i>{serie.premiered}</i></p></span>
        <span><p>Finalizó</p> <p><i>{serie.ended}</i></p></span>
        <span><p>País</p><p><i>{serie.network.country.name}</i></p></span>
        <span><p>Puntuación</p><p><i>{serie.rating.average}</i></p></span>
        <span><p>Estado </p><p><i>{serie.status}</i></p></span>
        <span><p>Episodios</p><p><i>{serie.runtime}</i></p></span>
        <span><p>Hora</p> <p><i>{serie.schedule.time}</i></p></span>
        <span><p>Día</p><p> <i>{serie.schedule.days}</i></p></span>
        <span><p>Zona horaria</p> <p><i>{serie.network.country.timezone}</i></p></span>
      </article>
      <section id='SeeMore'>
        <Link to={`/actors/${id}`}>
          Vamos a ver a los actores
        </Link>
        <Link to={`/temporadas/${id}`}>
          Vamos a ver todas las temporadas
        </Link>
      </section>
      <p id='SeeSerie'>
        <p id='SeeMov'>Para ver la serie completa, entra al siguiente enlace:</p>
        <a href={serie.officialSite} target='_blank' rel='noreferrer'>
          {serie.name}
        </a>
      </p>
    </>

  )
}

export default SerieDetails
