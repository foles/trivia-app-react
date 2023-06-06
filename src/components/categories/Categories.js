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


export default function Categories() {
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

          <Link className="card deportes" to={"/questions"}
            state={{
              category: 'Deportes'
            }}
          >
            <img src={deportes} width="20%" />
            Deportes
          </Link>
          <Link className="card artes" to={"/questions"}
            state={{
              category: 'Artes'
            }}
          >
            <img src={artes} width="20%" />
            Artes
          </Link>
          <Link className="card entretenimiento" to={"/questions"}
            state={{
              category: 'Entretenimiento'
            }}
          >
            <img src={entretenimiento} width="20%" />
            Entretenimiento
          </Link>
          <Link className="card ciencia" to={"/questions"}
            state={{
              category: 'Ciencia'
            }}
          >
            <img src={ciencia} width="20%" />
            Ciencia
          </Link>
          <Link className="card geografia" to={"/questions"}
            state={{
              category: 'Geografia'
            }}
          >
            <img src={geografia} width="20%" />
            Geografía
          </Link>
          <Link className="card historia" to={"/questions"}
            state={{
              category: 'Historia'
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
