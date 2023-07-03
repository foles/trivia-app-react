import React from 'react'
import { Link } from "react-router-dom";

import './Categories.css';
import logo from '../../assets/logo-trivia.png';
import deportes from '../../assets/deportes.svg';
import artes from '../../assets/artes.svg';
import historia from '../../assets/historia.svg';
import ciencia from '../../assets/ciencia.svg';
import entretenimiento from '../../assets/entretenimiento.svg';
import geografia from '../../assets/geografia.svg';
import {preguntas} from './banco_preguntas';
import  { useEffect, useState } from 'react';


export default function Categories() {


 
var i = 0;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function initLocalStorage(category){
    console.log('init ls');
    localStorage.setItem(category, "");
  }

  return (
    <div className='categories'>
      <header>
        <img className='img-logo' src={logo} />
      </header>

      <div className='categories-body'>
        <h1>
          Escoge una categoría
        </h1>
        <div className='categories-cards'>

          <Link className="card deportes" onClick={() => initLocalStorage('Deportes')} to={"/questions"}
            state={{
              category: 'Deportes',
              questions: shuffleArray(preguntas.Deporte.map((elemento) => {
                return {...elemento, isAnswered: false};
              })).map((elemento) => {
                return {...elemento, index: i++};
              })
            }}
          >
            <img src={deportes} width="20%" />
            Deportes
          </Link>
          <Link className="card artes" onClick={() => initLocalStorage('Artes')} to={"/questions"}
            state={{
              category: 'Artes',
              questions: shuffleArray(preguntas.Arte.map((elemento) => {
                return {...elemento, isAnswered: false};
              })).map((elemento) => {
                return {...elemento, index: i++};
              })
            }}
          >
            <img src={artes} width="20%" />
            Artes
          </Link>
          <Link className="card entretenimiento" onClick={() => initLocalStorage('Entretenimiento')} to={"/questions"}
            state={{
              category: 'Entretenimiento',
              questions: shuffleArray(preguntas.Entretenimiento.map((elemento) => {
                return {...elemento, isAnswered: false};
              })).map((elemento) => {
                return {...elemento, index: i++};
              })
            }}
          >
            <img src={entretenimiento} width="20%" />
            Entretenimiento
          </Link>
          <Link className="card ciencia" onClick={() => initLocalStorage('Ciencia')} to={"/questions"}
            state={{
              category: 'Ciencia',
              questions: shuffleArray(preguntas.Ciencia.map((elemento) => {
                return {...elemento, isAnswered: false};
              })).map((elemento) => {
                return {...elemento, index: i++};
              })
            }}
          >
            <img src={ciencia} width="20%" />
            Ciencia
          </Link>
          <Link className="card geografia" onClick={() => initLocalStorage('Geografia')} to={"/questions"}
            state={{
              category: 'Geografia',
              questions: shuffleArray(preguntas.Geografía.map((elemento) => {
                return {...elemento, isAnswered: false};
              })).map((elemento) => {
                return {...elemento, index: i++};
              })
            }}
          >
            <img src={geografia} width="20%" />
            Geografía
          </Link>
          <Link className="card historia" onClick={() => initLocalStorage('Historia')} to={"/questions"}
            state={{
              category: 'Historia',
              questions: shuffleArray(preguntas.Historia.map((elemento) => {
                return {...elemento, isAnswered: false};
              })).map((elemento) => {
                return {...elemento, index: i++};
              })
            }}
          >
            <img src={historia} width="20%" />
            Historia
          </Link>

        </div>

      </div>
    </div>
  )
}
