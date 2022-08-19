import React from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

function SongList({songs,selectSong}) {
  return (
    <div>
        {songs.map((e,i)=>{
            return (
                <div key={i}>
                    <h4>{e.title}</h4>
                    <p>{e.duration}</p>
                    <button onClick={()=>{selectSong(e)}}>Select Song</button>
                </div>
            )
        })}
    </div>
  )
}

const mapStatetoProps = state =>{
    console.log(state);
    return {songs : state.songs}
}

export default connect(mapStatetoProps,{selectSong})(SongList);