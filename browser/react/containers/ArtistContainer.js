'use strict';

import { connect } from 'react-redux';
import Artist from '../components/Artist';
import { fetchArtist } from '../action-creators/artists.js';

const mapStateToProps = ({ selectedArtist }) => ({
  selectedArtist
});

const mapDispatchToProps = dispatch => ({
  fetch: id => dispatch(fetchArtist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);