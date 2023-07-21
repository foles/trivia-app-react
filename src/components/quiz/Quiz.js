import  { useEffect, useState } from 'react';
import React from 'react'
import './Quiz.css';
import logo from '../../assets/logo-trivia.png';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function Quiz() {
  const navigate = useNavigate(); // react-router-dom v6

  // const history = useHistory();
  // const navigate = useNavigate();
  const [seconds, setSeconds] = useState(15); // Establece el tiempo inicial en segundos

  const [respuestasRandom, setRespuestasrandom] = useState([]); // Establece el tiempo inicial en segundos
  var timer;

  useEffect(() => {
    // Actualiza el temporizador cada segundo
    timer= setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);
    //Valida si el tiempo es 0
    if (seconds === 0) {

      validaPregunta()
    }
    // Cuando el componente se desmonte, se limpia el temporizador
    return () => clearInterval(timer);
  }, [seconds]);


  useEffect(() => {
    let mounted = true;
    setRespuestasrandom(shuffleArray(respuestas))
    return () => mounted = false;
  }, []);


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }



  const location = useLocation();
  const {pregunta, respuestas, correcta} = location.state;

  function validaPregunta(respuesta) {
    clearInterval(timer)

    console.log(respuesta);

    if(respuesta === correcta){
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
      }).then((result) => {
        navigate(-1)
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
      }).then((result) => {
        navigate(-1)
      })
    }

  

   
  }






  return (
    <div className='quiz'>
      <header>
        <img className='img-logo' src={logo}  />
      </header>

      <div className='quiz-body'>
        <div className='timer-quiz'>
          <h1>Tiempo : {seconds}</h1>
        </div>   
        <h1>
        {pregunta}
        </h1>

        <div className='quiz-cards' >
          {
            respuestasRandom.map(item => 
              <div className='quiz-option' onClick={() => validaPregunta(item)} >{item}</div> 
              )
          }
        </div>

      </div>
    </div>
  )
}
