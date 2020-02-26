import React, {Component} from 'react';
import Nav from '../nav/nav.jsx';
import SearchBox from '../search-box/search-box.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import Spinner from '../spinner/spinner.jsx';
import Pagination from '../pagination/pagination.jsx';

import './app.css';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            movies: [],
            searchTerm: '',
            loading: false,
            totalResults: 0,
            currentPage: 1
        }
        this.apiKey = process.env.REACT_APP_KEY_API
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        
        this.setState({
            loading: true
        }, () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=3107d9cc4cc04afb1c702620d6547bea&query=${this.state.searchTerm}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        setTimeout(() => {
           this.setState({
                 loading: false,
                 movies: [...data.results],
                 totalResults: data.total_results
           });
        }, 1000)
        })
    })
}

    onHandleChange = (e) => {
        this.setState({
            searchTerm: e.target.value,
            totalResults: false,
            currentPage: 1
        })
    }

    nextPage = (pageNumber) => {
        this.setState({
            loading: true,
            totalResults: false
        }, () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=3107d9cc4cc04afb1c702620d6547bea&query=${this.state.searchTerm}&page=${pageNumber}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        setTimeout(() => {
           this.setState({
                 loading: false,
                 movies: [...data.results],
                 currentPage: pageNumber,
                 totalResults: data.total_results
                });
            }, 200)
            })
        })
    }

    componentDidMount(){
        this.nextPage
    }

    render(){
        const{movies, loading, totalResults, currentPage} = this.state

        const spinner = loading ? <Spinner /> : null;
        const context = !loading ? <MovieList listOfMovies={movies}/> : null;

        const numberPages = Math.floor(this.state.totalResults / 20);
        return(
            <div className="App">
               <Nav />
               <SearchBox handleSubmit={this.onHandleSubmit}
                            handleChange={this.onHandleChange} />
                {spinner}
                {context}
                {totalResults > 20 ? <Pagination 
                pages={numberPages} 
                nextPage={this.nextPage} 
                currentPage={currentPage}/> : ''}
            </div>
        )
    }
}