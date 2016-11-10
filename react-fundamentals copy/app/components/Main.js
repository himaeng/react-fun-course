import React from 'react'

const Main = React.createClass({
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

export default Main