'use strict';

import React from 'react';
import { IndexLink } from 'react-router';

export default ({ artists, go }) => (
  <div>
    <h3>Artists</h3>
      <div className="list-group">
      {
        artists.map(artist => (
          <div className="list-group-item" key={ artist.id }>
            <IndexLink to={`/artists/${artist.id}`}> {artist.name}</IndexLink>
          </div>
        ))
      }
    </div>
  </div>
);