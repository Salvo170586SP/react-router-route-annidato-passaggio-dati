import React from 'react';
import './articoli.styles.css';
import { Link } from 'react-router-dom';
import { categorie } from '../../shop-data';


const Articoli = () => {
    return (
        <div className="articoli">
            <h1>Articoli</h1>

            <div className="articoli-container">
                {categorie.map(categoria => (
                    <div title={categoria.title} className="articoli-card" key={categoria.id}>
                        <Link to={`/articoli/${categoria.id}`} >{categoria.title}</Link>
                    </div>
                ))}
            </div>
        </div>



    )
}

export default Articoli;