import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import Poster from './poster';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviePosters: []
    }
  }
  componentDidMount() {
    var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
    $.getJSON(url,(movieData) => {
      this.setState({
        moviePosters: movieData.results
      });
    });
  }

  // Load up the movie posters array with Poster components
  render() {
    var postersArray = [];
    this.state.moviePosters.map((poster,index) => {
      postersArray.push(<Poster poster={poster} key={index} />)
    });


    return (
      <div className="container">
        <div className="row">
          <h1>Posters Here</h1>
          {postersArray}
        </div>
      </div>
    );
  }
}

export default App;
