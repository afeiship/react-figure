import './dev.scss';
import ReactFigure from './main';

/*===example start===*/

// install: npm install afeiship/react-figure --save
// import : import ReactFigure from 'react-figure'

class App extends React.Component {
  state = {

  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render() {
    return (
      <div className="hello-react-figure">
        <ReactFigure style={{ width: 300, height: 400 }} ref='rc' caption="test">
          <img src='http://placeholder.qiniudn.com/80x80' alt="" />
        </ReactFigure>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
