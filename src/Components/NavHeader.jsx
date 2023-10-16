import React from 'react'
import { NavLink } from 'react-router-dom'

const NavHeader = () => {
  return (
    <section id='NavHead'>
      <article id='NavIzq'>
        <NavLink to='/'>
          <img id='LogoHome' alt='Home' src='../src/assets/logo-home.png' />
        </NavLink>
      </article>
      <article id='NavDer'>
        <NavLink to='/'>
          Buscador
        </NavLink>
        <NavLink to='/actors'>
          Actores
        </NavLink>
        <NavLink to='/temporadas'>
          Temporadas
        </NavLink>
        <NavLink to='/about'>
          About
        </NavLink>
        <NavLink to='/contacto'>
          Contacto
        </NavLink>
        <NavLink to='/serie'>
          Details
        </NavLink>

      </article>
    </section>
  )
}

export default NavHeader
