import ReactFigure from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <ReactFigure caption="test picture">
          <img
            src="https://miro.medium.com/max/2798/1*RAa-e7v7WghBqatRXBy3WQ.jpeg"
            alt=""
          />
        </ReactFigure>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
