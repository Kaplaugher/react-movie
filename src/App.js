import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import Poster from './Poster';
import BootstrapNavbar from './BootstrapNavbar';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(searchTextFromChild){
        this.setState({
            searchText: searchTextFromChild
        });
        this.props.router.push('/search/' + encodeURI(searchTextFromChild));
    }

    componentDidMount() {
        console.log(this.props.router)
    }

	render() {
		return (
			<div className="container">
				<div className="row">
                    <BootstrapNavbar functionFromParent={this.handleSearch} />
                    {this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
