import  { useEffect, useState } from 'react';
import React from 'react'
import './Questions.css';
import logo from '../../assets/logo-trivia.png';
import {preguntas} from './banco_preguntas';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";




export default function Questions() {

  const location = useLocation();
  const {category, questions } = location.state;
  const [listQuestions, setListquestions] = useState([]);
  var i = 1;
  console.log('test');
  console.log(questions)

  function setAnswered(i){
    localStorage.setItem(category, localStorage.getItem(category)+i+',');
  }

  const indicesArray = localStorage.getItem(category).split(",").map(str => parseInt(str.trim()));
  console.log(indicesArray)

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
           questions.map(item => 
            (!indicesArray.includes(item.index) ) ?
            <Link className='card-question' onClick={() => setAnswered(item.index)} to={"/quiz"}
              state={{
                pregunta: item.Pregunta,
                respuestas: [item.Incorrecta1, item.Incorrecta2, item.Incorrecta3, item.Correcta],
                correcta: item.Correcta
              }}
            >
              { i++}
            </Link>

            : 

            <div className='card-question-answered'> 
                 { i++}
              </div>
              )
          }

          

        </div>

      </div>
    </div>
  )
}

