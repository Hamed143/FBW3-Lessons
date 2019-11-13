import { combineReducers } from 'redux';
const songsReducer = () => {

    return [
        { title : 'Rahat Benyamin' , duration: '6,30'},
        { title : 'Donya Benyamin' , duration: '5,30'},
        { title : 'Adam Ahani Benyamin' , duration: '4,30'},
        { title : 'Ghorob Benyamin' , duration: '3,30'},
    ];

}
const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong;

}

export default combineReducers ({
    songs : songsReducer ,
    selectedSong : selectedSongReducer
})