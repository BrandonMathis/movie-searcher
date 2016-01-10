import React from 'react';
import QueryBox from './QueryBox';

export default class AppBody extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div className='main'>
      <header>
        <div className='title'>
          <h1>Film Search</h1>
        </div>
      </header>
      <QueryBox />
      <footer>
        &copy; Brandon Mathis
      </footer>
    </div>
  }
}
