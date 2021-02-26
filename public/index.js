import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import NxRandomAvatar from '@jswork/next-random-avatar';
import ReactFigure from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-figure">
        <ReactFigure caption="test picture">
          <img src={NxRandomAvatar.lego()} alt="" />
        </ReactFigure>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
