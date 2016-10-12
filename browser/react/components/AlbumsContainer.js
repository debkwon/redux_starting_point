import {connect} from 'react-redux';
import Store from '../store';
import Albums from './Albums';
import React from 'react';
import fetchAlbumsFromServer from '../reduxstuff';

const mapStateToProps = (state, ownProps) => {
  return {
    albums: state.albums
  };
};  

const mapDispatchToProps = function (dispatch, ownProps) {
  return { 
    getAlbums: dispatch(fetchAlbumsFromServer())
  };
}


const AlbumsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);



export default AlbumsContainer;