import React from 'react';
import { Card } from 'react-bootstrap';

export default function Cards(props) {

    return (
        <Card style={{ width: props.width, height: props.height, backgroundColor: 'beige' }} className="cards">
        </Card>
    );

}