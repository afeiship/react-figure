# react-figure
> A tiny figure image for react.

## installation
```shell
npm install -S @feizheng/react-figure
```

## update
```shell
npm update @feizheng/react-figure
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| caption   | any    | -       | Default image caption.                |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-figure/dist/style.scss";

  // customize your styles:
  $react-figure-options: ()
  ```
2. import js
  ```js
  import ReactFigure from '@feizheng/react-figure';
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

  ```

## documentation
- https://afeiship.github.io/react-figure/
