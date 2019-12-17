import * as React from 'react';

export default function CompactDisc() {
    return (
        <div className="CD">
            <h1>CD</h1>
            <img alt="AlbumCover" height="200" width="200"
                src={`${process.env.PUBLIC_URL}/placeholder.png`} />
            <table>
                <tbody>
                    <tr><td>Typ</td><td>Album</td></tr>
                    <tr><td>Interpret</td><td>John Doe</td></tr>
                    <tr><td>Titel</td><td>my album</td></tr>
                    <tr><td>Genre</td><td>Dance</td></tr>
                    <tr><td>Label</td><td>Audiorecordings</td></tr>
                    <tr><td>Spielzeit</td><td>55 Min.</td></tr>
                    <tr><td>Datenträger</td><td>CD</td></tr>
                    <tr><td>Datenträger Anzahl</td><td>1</td></tr>
                    <tr><td>Erscheinungsjahr</td><td>1990</td></tr>
                </tbody>
            </table>

        </div>
    );
}