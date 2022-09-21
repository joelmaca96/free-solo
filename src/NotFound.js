import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className='centered-full-col'>
        <h1>404: lo siento, pero no se ha encontrado lo que buscas... <Link to={'/'}>Prueba otra vez!!!</Link></h1>
    </div>
);
export default NotFound;
