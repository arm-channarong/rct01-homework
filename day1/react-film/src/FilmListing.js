import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  render() {
    let allFilms = this.props.films.map( (film, index) => <FilmRow key={film.id} title={film.title} year={new Date(film.release_date).getFullYear()} poster={`https://image.tmdb.org/t/p/w780/${film.poster_path}`} /> )
    
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {allFilms}
      </div>
    );
  }
}

export default FilmListing;