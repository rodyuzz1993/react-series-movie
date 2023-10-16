import React from 'react'

const Footer = () => {
  return (
    <section id='Footer'>
      <article id='LogoFooter'>
        <img id='LogoHome' alt='Home' src='../src/assets/logo-home.png' />
        <span>
          Categorías
        </span>
        <span>
          About
        </span>
        <span>
          Políticas
        </span>
        <span>
          Contáctanos
        </span>
      </article>
      <article id='FooterBottom'>
        <span id='Design'>
          Diseñado por <a href='https://github.com/rodyuzz1993' target='_blank' rel='noreferrer'>
            Rod Uzz
          </a> para DEV.F 2023
        </span>
      </article>
    </section>
  )
}

export default Footer
