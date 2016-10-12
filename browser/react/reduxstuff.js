import {connect} from 'react-redux';

const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER';

const receiveAlbums = albums => ({ 
  type: RECEIVE_ALBUMS_FROM_SERVER,
  albums
});

const fetchAlbumsFromServer = () => {
  return (dispatch) => {
    fetch('/api/albums')
      .then(res => res.json())
      .then( (allAlbums) => {
        allAlbums.map(function(album){
          album.imageUrl = `/api/albums/${album.id}/image`;
        });
        return allAlbums;
      })
      .then(albums => {
        console.log(albums, "before final dispatch")
        dispatch(receiveAlbums(albums))
      })
      .catch(function(err){
        console.log(err)
      }); 
  }
}

// export const playSong = songId => {
//   return dispatch => {
//     // side effects, like using the audio element belong in async action creators too, even if they aren't "async"
//     audio.play() 
//     dispatch(selectSong(songId));
//   }
// }

// export const doSeveralThings = (stuffId, thingsId) => {
//   return dispatch => {
//     // we can also use async action creators to compose several actions into one!
//     dispatch(doStuff(stuffId));
//     dispatch(doThing(thingId));
//   }
// }

export default fetchAlbumsFromServer;

