import { Link } from 'react-router-dom'

const AllMovies = ({ id, TipoPelicula, TituloPelicula, Rating, Estreno, UrlImg }) => {
  return (
    <nav id='CardMov'>
      <span id='TypeMovie'>
        {TipoPelicula}
      </span>
      <Link id='PortadaMovie' to={`/serie/${id}`}>
        <img alt='Portada' id='ImgPortada' src={UrlImg} />
      </Link>
      <div id='TxtMovie'>
        <p id='TitleMovie'>
          {TituloPelicula}
        </p>
        <p id='CalifMovie'>
          Rating: {Rating}
        </p>
        <p id='FechaMovie'>
          Estreno: {Estreno}
        </p>
      </div>

    </nav>
  )
}

export default AllMovies
