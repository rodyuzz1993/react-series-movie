import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Temporadas = () => {
  const [temporada, setTemporadas] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
      .then(response => response.json())
      .then(data => setTemporadas(data))
      .catch(error => console.log(error))
  }, [id])

  if (!temporada) {
    return <div>Temporadas...</div>
  }
  const SecResumSeason = document.getElementById('ResumSeason')
  const BtnResumSeason = document.getElementById('SeeDetailSeason')

  if (SecResumSeason && BtnResumSeason) {
    BtnResumSeason.addEventListener('click', function () {
      // Las siguientes líneas se ejecutarán cuando se haga clic en BtnResumSeason
      SecResumSeason.style.display = 'block'
      setTimeout(() => {
        SecResumSeason.style.opacity = '0.9'
      }, 1000)
      setTimeout(() => {
        SecResumSeason.style.marginTop = '0%'
      }, 2000)
    })
  }

  return (
    <>
      <article id='InfoSeason'>
        <button id='SeeDetailSeason'>
          Resumen Temporada
        </button>
        {temporada.map((season) => (
          <div key={season.id} id='DetailSeason'>
            {season.number && season.image && (

              <img alt={season.number} src={season.image.original} />)}
            <div id='ResumSeason' className='ResumSeason'>
              <span>Temporada: {season.number} </span>
              <span>Número de episodios: {season.episodeOrder}</span>
              <span>Estreno: {season.premiereDate} </span>
              <span>Finalizó: {season.endDate} </span>
              <span>Televisora: {season.network.name} </span>
              <span>Resumen: {season.summary}  </span>
            </div>
          </div>
        ))}
      </article>
    </>

  )
}

export default Temporadas
