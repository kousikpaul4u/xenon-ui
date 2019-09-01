import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Input from '../components/Input.js';

export default function MusicPlayer(props) {

    return (
        <Card className="cards music-player-card" style={{ position: 'fixed' }}>
            <div className="profile-image"></div>
            <div className="album-art"></div>
            <div className="app-logo">Xenon Music</div>
            <div className="search-box"><Input /></div>
            <span className="material-icons music-player-icons">fast_rewind</span>
            <span className="material-icons music-player-icons">pause</span>
            <span className="material-icons music-player-icons">fast_forward</span>
        </Card>
    );

}