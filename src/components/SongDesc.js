import React from 'react';
import { connect } from 'react-redux';

function SongDesc({ selectedSong }) {
    return (
        <div>
            <h1>{selectedSong && selectedSong.title}</h1>
            <p>{selectedSong && selectedSong.duration}</p>
        </div>
  )
}

const mapStatetoProps = state => {
    return { selectedSong: state.selectedSong }
}

export default connect(mapStatetoProps)(SongDesc);