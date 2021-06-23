/// <reference path="./Tiles.d.ts"/>
/// <reference path="../store/reducers/showsReducer.d.ts"/>

import * as React from 'react';
import { connect } from 'react-redux';

import Tile from '../components/Tile';

class Tiles extends React.Component<TilesProps, {}> {
  render() {
    return this.props.shows.map(show => <Tile key={show.name} show={show} />);
  }
}

const mapStateToProps = (state: ShowsState) => {
  return {
    shows: !state.shows.loading ? state.shows.data : []
  };
};

export default connect(mapStateToProps)(Tiles);
