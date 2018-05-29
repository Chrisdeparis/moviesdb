import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log('This is my initializer')

    // const movies = [
    //   {id:0, title: "Le diner de cons", poster_src: "http://fr.web.img6.acsta.net/r_1280_720/medias/nmedia/18/36/10/96/19649758.jpg", overview: "résumé du film le diner de cons..."},
    //   {id:1, title: "Le pacte des loups", poster_src:"https://www.cinema-francais.fr/images/affiches/affiches_g/affiches_gans_christophe/le_pacte_des_loups.jpg", overview: "résumé du film le pacte des loups..."},
    //   {id:2, title: "Intouchables", poster_src: "http://fr.web.img6.acsta.net/medias/nmedia/18/82/69/17/19806656.jpg", overview: "résumé du film Intouchable..."},
    // ]

    // this.state= {rows: [
    //   <p key="0">This is my row 0</p>,
    //   <p key="1">This is my row 1</p>,
    //   <p key="2">This is my row 2</p>
    // ]}

    // var movieRows = []

    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie}/>
    //   movieRows.push(movieRow)
    // })

    // this.state = {rows: movieRows}
    this.performSearch("ant man")
  }

  performSearch(searchTerm){
    console.log("perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=d68a8f90bcf091f3e5f9a90f252208d5&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log('fetched data successfuly')
        const results = searchResults.results

        var movieRows = []
        
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185/" + movie.poster_path
          console.log(movie.title)
          
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        });

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.log('failed to fetch data')
      }
    })
  }

  searchChangeHandler(event){
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }


  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="logo" width="50px" src="green-app-icon.svg"/>
              </td>
              <td width="8"/>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} type="text" placeholder="Enter search term..." onChange={this.searchChangeHandler.bind(this)}/>

        {this.state.rows}
  
        
      </div>
    );
  }
}

export default App;
