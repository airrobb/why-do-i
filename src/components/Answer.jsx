import React, { Component } from 'react'

export default class Answer extends Component {
  constructor(props) {
    super(props)
  }
  handleAskAgain(e){
    e.preventDefault()
    this.props.askAgain()
  }
  componentDidMount() {
    document.getElementById('ask-again').focus()
  }
  render() {
    return (
      <div className="answer-block">
        <div className="answer">
          Your Ego
        </div>
        <div className="ask-again">
          <button id="ask-again" onClick={this.handleAskAgain.bind(this)}>{this.props.askMessage}</button>
        </div>
      </div>
    )
  }
}
