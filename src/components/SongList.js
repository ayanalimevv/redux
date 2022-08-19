import React from 'react';
import { connect } from 'react-redux';

function SongList({songs}) {
  return (
    <div>
        {songs.map((e,i)=>{
            return (
                <div key={i}>
                    <h4>{e.title}</h4>
                    <p>{e.duration}</p>
                    <button>Select Song</button>
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

export default connect(mapStatetoProps)(SongList);