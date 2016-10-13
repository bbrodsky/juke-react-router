'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import { fetchAlbum } from '../action-creators/albums.js';

const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});

const mapDispatchToProps = dispatch => ({
  fetch: id => dispatch(fetchAlbum(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
