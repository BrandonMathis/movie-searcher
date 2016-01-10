import React from 'react';
import imdb from 'imdb-api';
import $ from 'jquery';

var QueryBox = React.createClass({
  queryForMovie(query) {
    $.ajax({
      url: "http://www.omdbapi.com/?tomatoes=true&t=" + this.state.movieQuery,
        dataType: 'json',
        success: this.setMovieData
    });
  },

  setMovieData: function(data) {
    if (this.isMounted() && data.Response === "True") {
      this.setState({
        movieData: data
      });
      $('input').val("");
    } else {
      $('input').addClass("error");
    }
    $('input').focus();
  },

  handleChange: function(event) {
    this.setState({
      movieQuery: event.target.value
    });
  },

  componentDidMount: function() {
    $('input[name="query"]').focus();
  },

  render: function() {
    let form = <div className='search-field'>
      <div className='search'>
        <input type='text' name='query' onChange={this.handleChange} placeholder='MOVIE TITLE'/>
        <button onClick={this.queryForMovie}>SEARCH</button>
      </div>
    </div>

    if(this.state === null || typeof(this.state.movieData) === "undefined"){
      return <div className='query-box'>
        {form}
      </div>
    } else
    {
      return <div className='query-box'>
        {form}
        <div className='movie-details'>
          <h2 className='movie-title'>{this.state.movieData.Title}</h2>
          <div className='movie-summary'>
            <h2>Summary</h2>
            <div className='movie-summary-body'>
              {this.state.movieData.Plot}
            </div>
          </div>
          <div className='movie-ratings'>
            <h2>Ratings</h2>
            <table>
              <tr>
                <td>IMDB Score</td>
                <td>{this.state.movieData.imdbRating}</td>
              </tr>
              <tr>
                <td>Metacritic Score</td>
                <td>{this.state.movieData.Metascore} / 100</td>
              </tr>
              <tr>
                <td>Rotten Tomatoes</td>
                <td>{this.state.movieData.tomatoMeter}%</td>
              </tr>
            </table>
          </div>
          <div className='movie-crew'>
            <h2>Crew</h2>
            <ul>
              <li>
                <span className='title'>Director</span>:&nbsp;
                <a href='#'>{this.state.movieData.Director}</a>
              </li>
              {this.state.movieData.Actors.split(",").map(function(object, i){
              return <li>
                <span className='title'>Actor</span>:&nbsp;
                <a href='#'>{object}</a>
              </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    }
  }
});

export default QueryBox;
