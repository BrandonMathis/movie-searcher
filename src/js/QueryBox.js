import React from 'react';
import HelloText from './HelloText';
import imdb from 'imdb-api';

export default class QueryBox extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    imdb.getReq({ name: 'Star Wars VII'}, (err, things) => {
      console.log(things);
    });
  }

  render() {
    return <div className='query-box'>
      <div className='search-field'>
        <label>
          <HelloText name='Brandon' />
        </label>
        <div className='search'>
          <input type='text' placeholder='movie name'/>
        </div>
      </div>
      <div className='movie-details'>
        <div className='movie-summary'>
          <h2>Summary</h2>
          <div className='movie-summary-body'>
            Obi-Wan Kenobi (Ewan McGregor) is a young apprentice Jedi knight under the tutelage of Qui-Gon Jinn (Liam Neeson) ; Anakin Skywalker (Jake Lloyd), who will later father Luke Skywalker and become known as Darth Vader, is just a 9-year-old boy. When the Trade Federation cuts off all routes to the planet Naboo, Qui-Gon and Obi-Wan are assigned to settle the matter.
          </div>
        </div>
        <div className='movie-ratings'>
          <h2>Ratings</h2>
          <table>
            <tr>
              <td>IMDB Score</td>
              <td>★★★★★★★★☆☆</td>
            </tr>
            <tr>
              <td>Metacritic Score</td>
              <td>81 / 100</td>
            </tr>
            <tr>
              <td>Rotten Tomatoes</td>
              <td>98%</td>
            </tr>
          </table>
        </div>
        <div className='movie-crew'>
          <h2>Crew</h2>
          <ul>
            <li>
              <span className='title'>Director</span>:&nbsp;
              <a href='#'>J.J. Abrams</a>
            </li>
            <li>
              <span className='title'>Actor</span>:&nbsp;
              <a href='#'>Harrison Form</a>
            </li>
            <li>
              <span className='title'>Actor</span>:&nbsp;
              <a href='#'>Mark Hamill</a>
            </li>
            <li>
              <span className='title'>Actor</span>:&nbsp;
              <a href='#'>Carrie Fisher</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  }
}
