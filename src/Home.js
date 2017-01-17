import React, {Component} from 'react';
import './App.css';
import $ from 'jquery';
import Poster from './Poster';
import Constants from './Constants';
import config from './config';
import DiscoverButton from './DiscoverButton';

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleCategorychange = this.handleCategorychange.bind(this);
        this.state = {
            moviePosters: []
        }

    }

    componentDidMount() {
        var url = Constants.baseUrl + Constants.nowPlayingEP + config.api_key;
        $.getJSON(url, (movieData) => {
            this.setState({moviePosters: movieData.results});
        });
    }

    handleCategorychange(categoryApiUrl){
      var url = Constants.baseUrl + categoryApiUrl + config.api_key
      $.getJSON(url,(categoryData) => {
        this.setState({
          moviePosters: categoryData.results
        })
      });
    }

    render() {
        var postersArray = [];
        this.state.moviePosters.map((poster, index) => {
            postersArray.push(<Poster poster={poster} key={index}/>)
        });
        var discoverButtons = [];
        Constants.discoverLinks.map((category,index) => {
          discoverButtons.push(
            <DiscoverButton buttonLink={category.link} buttonText={category.buttonText} functionFromParent={this.handleCategorychange} key={index} />
          )
        })
        return (
            <div>
                <h1>This is the home page</h1>
                <div className="col-sm-12">
                  {discoverButtons}
                </div>
                {postersArray}
            </div>

        );
    }
}

export default Home
