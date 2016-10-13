'use strict';

import React from 'react';
import { IndexLink } from 'react-router';

export default ({  }) => (
  <sidebar>
    <img src="juke.svg" className="logo" />
    <section>
      {/* <h4 activeClassName={location.match('albums') ? 'menu-item active' : 'menu-item'}> */}
      <h4>
        <IndexLink to="/albums">ALBUMS</IndexLink>
      </h4>
    </section>
    <section>
      {/* <h4 activeClassName={location.match('artist') ? 'menu-item active' : 'menu-item'}> */}
      <h4>
        <IndexLink to="/artists">ARTISTS</IndexLink>
      </h4>
    </section>
  </sidebar>
);
