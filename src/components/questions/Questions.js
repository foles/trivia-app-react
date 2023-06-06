import  { useEffect, useState } from 'react';
import React from 'react'
import './Questions.css';
import logo from '../../assets/logo-trivia.png';
import {preguntas} from './banco_preguntas';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";




export default function Questions() {

  const location = useLocation();
  const {category } = location.state;
  const [listQuestions, setListquestions] = useState([]);
  var i = 1;
  useEffect(() => {
    let mounted = true;
    console.log(category);
    switch(category){
      case 'Historia' : 
        setListquestions(preguntas.Historia);
        break;
        case 'Deportes' : 
        setListquestions(preguntas.Deporte);
        break;
        case 'Artes' : 
        setListquestions(preguntas.Arte);
        break;
        case 'Geografia' : 
        setListquestions(preguntas.Geografía);
        break;
        case 'Ciencia' : 
        setListquestions(preguntas.Ciencia);
        break;
        case 'Entretenimiento' : 
        setListquestions(preguntas.Entretenimiento);
        break;      
    }

    
    return () => mounted = false;
  }, [])



  return (
    <div className='questions'>
      <header>
        <img className='img-logo' src={logo}  />
      </header>

      <div className='questions-body'>
        <h1>
          Escoge una pregunta
        </h1>
        <div className='questions-cards'>
          {
            listQuestions.map(item => 
              <Link className='card-question' to={"/quiz"}
              state={{
                pregunta: item.Pregunta,
                respuestas: [item.Incorrecta1, item.Incorrecta2, item.Incorrecta3, item.Correcta ],
                correcta: item.Correcta
              }}
            >
              {i++}
            </Link>
              )
          }

          

        </div>

      </div>
    </div>
  )
}
