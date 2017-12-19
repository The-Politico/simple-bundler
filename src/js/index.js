import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/app.scss');

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<HelloMessage name="Tyler" />, mountNode);
