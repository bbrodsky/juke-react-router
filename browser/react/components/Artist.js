'use strict';

import React from 'react';
import { IndexLink } from 'react-router';
import SongsContainer from '../containers/SongsContainer';

export default class Artist extends React.Component {

  componentDidMount(){
    this.props.fetch(this.props.params.artistId);
  }

  render(){
    const {selectedArtist} = this.props;
    //console.log(this.props);
    return(
      <div>
        <h3>{ selectedArtist.name }</h3>
        <h3>Albums</h3>
        <div className="row">
          {
            selectedArtist.albums && selectedArtist.albums.map(album => (
              <div className="col-xs-4" key={album.id}>
                <IndexLink className="thumbnail" to={`/albums/${album.id}`}> {album.name}
                  <img src={ album.imageUrl } />
                  <div className="caption">
                    <h5>
                      <span>{ album.name }</span>
                    </h5>
                    <small>{ album.songs.length } songs</small>
                  </div>
                </IndexLink>
              </div>
            ))
          }
        </div>
        <SongsContainer songs={selectedArtist.songs} />
      </div>
    );  
  }
}   

