import React from 'react';
import Cards from '../components/Cards.js'
import { Container } from 'react-bootstrap';

export default function AldumGrid(props) {

    return (
        <div className="row album-grid-container">
            <Cards height="270px" width="270px" />
            <Cards height="270px" width="270px" />
            <Cards height="270px" width="270px" />
            <Cards height="270px" width="270px" />
            <Cards height="270px" width="270px" />
            <Cards height="270px" width="270px" />
            <Cards height="270px" width="270px" />
            <Cards height="270px" width="270px" />
            <Cards height="270px" width="270px" />
            <Cards height="270px" width="270px" />
            <Cards height="270px" width="270px" />
            <Cards height="270px" width="270px" />
        </div>
    );

}