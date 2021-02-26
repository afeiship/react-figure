# react-figure
> A tiny figure image for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-figure
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| caption   | any    | false    | -       | Default image caption.                |


## usage
1. import css
  ```scss
  @import "~@jswork/react-figure/dist/style.css";

  // or use sass
  @import "~@jswork/react-figure/dist/style.scss";

  // customize your styles:
  $react-figure-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import NxRandomAvatar from '@jswork/next-random-avatar';
  import ReactFigure from '@jswork/react-figure';
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

  ```

## documentation
- https://afeiship.github.io/react-figure/


## license
Code released under [the MIT license](https://github.com/afeiship/react-figure/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-figure
[version-url]: https://npmjs.org/package/@jswork/react-figure

[license-image]: https://img.shields.io/npm/l/@jswork/react-figure
[license-url]: https://github.com/afeiship/react-figure/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-figure
[size-url]: https://github.com/afeiship/react-figure/blob/master/dist/react-figure.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-figure
[download-url]: https://www.npmjs.com/package/@jswork/react-figure
