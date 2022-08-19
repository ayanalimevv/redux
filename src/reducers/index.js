export const songReducer = () =>{
    return [
        { title: "We do it too", duration: '120' },
        { title: "Love me like you do", duration: '129' },
        { title: "Yeah Buddy", duration: '112' }
    ]
}

export const selectSongReducer= (selectedSong=null,action) => {
    if(action.type==="SONG_SELECTED"){
        return action.payload;
    }
    return selectedSong;
}