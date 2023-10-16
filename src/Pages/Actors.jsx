import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Actors = () => {
  const [actor, setActor] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then(response => response.json())
      .then(data => setActor(data))
      .catch(error => console.log(error))
  }, [id])
  if (!actor) {
    return <div>Actores...</div>
  }

  return (
    <>
      <article id='DetailActors'>
        {actor.map((people) => (
          <div key={people.id} id='CardActors'>
            <div id='ActorImg' style={{ background: `url(${people.person.image.original})` }} />
            {people.character && people.character.image && (
              <div id='PersonajeImg' style={{ background: `url(${people.character.image.original})` }} />
            )}
            <div id='InfoActors'>
              <p>Actor: {people.person.name}</p>
              <p>De:{people.person.country.name}</p>
              <p>Nació el día {people.person.birthday}</p>
              <p>Interpreta a  {people.character.name}</p>
            </div>
          </div>
        ))}
      </article>
    </>

  )
}

export default Actors
