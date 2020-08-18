import React from 'react';
import SongService from '../services/SongService';

class SongComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            songs:[]
        }
    }

    //use to call REST api
    componentDidMount(){
        SongService.getSongs().then((response) => {
           this.setState({ songs: response.data})  
        });
    }

    render (){
        return (
            <div>
                <h1 className="text-center">Song List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Song ID</td>
                            <td>Artist</td>
                            <td>Genre</td>
                            <td>Lyrics</td>
                            <td>Songtitle</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.songs.map(
                                song =>
                                <tr key = {song.id}>
                                    <td>{song.id}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.genre}</td>
                                    <td>{song.lyrics}</td>
                                    <td>{song.songTitle}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

export default SongComponent;