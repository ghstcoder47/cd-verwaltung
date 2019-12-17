import * as React from 'react';

import './CompactDisc.css'
import MediumCD from './MediumCD';

export default function CompactDisc() {

    const myAlbum = new MediumCD('Album', 'John Doe', 'my album', 'Dance', 'Cool Records', '53 Min.', 'CD', 2, 1995);


    return (
        <div className="compactdisc">
            <h1>CD</h1>
            <img alt="AlbumCover" height="200" width="200"
                src={`${process.env.PUBLIC_URL}/placeholder.png`} />
            <table>
                <tbody>
                    <tr><td>Typ</td><td>{myAlbum.type}</td></tr>
                    <tr><td>Interpret</td><td>{myAlbum.interpret}</td></tr>
                    <tr><td>Titel</td><td>{myAlbum.titel}</td></tr>
                    <tr><td>Genre</td><td>{myAlbum.genre}</td></tr>
                    <tr><td>Label</td><td>{myAlbum.label}</td></tr>
                    <tr><td>Spielzeit</td><td>{myAlbum.spielzeit}</td></tr>
                    <tr><td>Datenträger</td><td>{myAlbum.datentraeger}</td></tr>
                    <tr><td>Datenträger Anzahl</td><td>{myAlbum.datentraegerAnzahl}</td></tr>
                    <tr><td>Erscheinungsjahr</td><td>{myAlbum.erscheinungsjahr}</td></tr>
                </tbody>
            </table>
            <div className="controlls">
                <button>OK</button>
                <button>Edit</button>
                <button>Cancel</button>
            </div>
        </div>
    );
}