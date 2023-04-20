import React from 'react';
import './categorie-articoli.styles.css';

const CategorieArticoli = (props) => {
    return (
        <div className="categorieArticoli">
            <h1>{props.title}</h1>
        </div>
    );
};

export default CategorieArticoli;