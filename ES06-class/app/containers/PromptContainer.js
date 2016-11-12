import React, { Component } from 'react'
import Prompt from '../components/Prompt'

class PromptContainer extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }
  }
  handleUpdateUser (event) {
    this.setState({
      username: event.target.value
    });
  }
  handleSubmitUser (e) {
    e.preventDefault();
    const { username } = this.state;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username,
        }
      })
    } else {
      this.context.router.push(`/playerTwo/${username}`)
    }
  }
  render () {
    return(
      <Prompt
        onSubmitUser={(event) => this.handleSubmitUser(event)}
        onUpdateUser={(event) => this.handleUpdateUser(event)}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer