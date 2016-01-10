import '../css/app.scss';

import HelloBox from './HelloBox';
import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>
      <header>
        Film Search
      </header>
      <HelloBox />
    </div>
  }
}

React.render(<App />, document.getElementsByTagName('body')[0])
