import React, { Component } from 'react';

class FilmPoster extends Component {
  render() {
    let {posterUrl} = this.props;
    return (
        <img src={posterUrl} alt="" />
    );
  }
}

export default FilmPoster;