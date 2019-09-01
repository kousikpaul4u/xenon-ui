import React from 'react';
import Cards from '../components/Cards.js'
import MusicPlayer from '../components/MusicPlayer.js';
import AldumGrid from '../components/AlbumGrid.js';

export default function HomePage(props) {

    return (
        <div id="home-page-div">
            <MusicPlayer />
            <div className="main-container" style={{ paddingTop: '70px' }}>
                <AldumGrid />
            </div>
            <div>
                Hello
            </div>
        </div>
    );

}