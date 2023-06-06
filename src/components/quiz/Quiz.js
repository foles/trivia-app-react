import  { useEffect, useState } from 'react';
import React from 'react'
import './Quiz.css';
import logo from '../../assets/logo-trivia.png';
import { useLocation } from 'react-router-dom';

import Swal from 'sweetalert2';


export default function Quiz() {

  const location = useLocation();
  const {pregunta, respuestas, correcta} = location.state;

  function validaPregunta(respuesta) {
    console.log(respuesta);

    if(respuesta == correcta){
      Swal.fire({
        title: 'Respuesta Correcta',
        icon: 'success',
        width: 600,
        padding: '3em',
        color: '#00DFA2',
        background: '#545B77 url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.tenor.com/pbzLgMsgnaYAAAAM/youre-damn-right-eric-cartman.gif")
          center top
          no-repeat
        `
      })
    } else {
      Swal.fire({
        title: 'Respuesta Incorrecta',
        icon: 'error',
        width: 600,
        padding: '3em',
        color: '#CD1818',
        background: '#545B77 url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.tenor.com/Is7pMDGXQrkAAAAM/ogvhs-nope.gif")
          center top
          no-repeat
        `
      })
    }

  

   
  }






  return (
    <div className='quiz'>
      <header>
        <img className='img-logo' src={logo}  />
      </header>

      <div className='quiz-body'>
        <h1>
        {pregunta}
        </h1>

       

        <div className='quiz-cards' >
          {
            respuestas.map(item => 
              <div className='quiz-option' onClick={() => validaPregunta(item)} >{item}</div> 
              )
          }
        </div>

      </div>
    </div>
  )
}
