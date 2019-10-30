import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import './App.css';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing films={TMDB.films} />
        <FilmDetails />
      </div>
    );
  }
}

export default App;
