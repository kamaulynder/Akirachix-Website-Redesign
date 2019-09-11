import React, { Component } from 'react'

export default class HelloWorld extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h1>Hello World!</h1>
        <p>This is a working example of a React Hello World component.</p>
      </div>
    )
  }
}
