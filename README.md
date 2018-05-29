# react-figure
> A tiny figure image for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    caption: PropTypes.any
  };

  static defaultProps = {
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-figure --registry=https://registry.npm.taobao.org
```

```js
import ReactFigure from 'react-figure';
```

```scss
// customize your styles:
$react-figure-options:(
);

@import 'node_modules/react-figure/dist/style.scss';
```


## usage:
```jsx

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

```
