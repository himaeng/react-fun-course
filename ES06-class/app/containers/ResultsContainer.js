import React, { Component } from 'react'
import Results from '../components/Results'
import { battle } from '../utils/githubHelpers'

class ResultsContainer extends Component{
  constructor () {
    super()
    this.state = {
      isLoading: true,
      scores: []
    }
  }
  async componentDidMount () {
    try {
      const scores = await battle(this.props.location.state.playersInfo)
      this.setState({
        scores,
        isLoading: false
      })
    } catch (error) {
      console.warn('Error in ResultsContainer:', error)
    }
  }
  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores}/>
    )
  }
}

export default ResultsContainer