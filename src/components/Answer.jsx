import React, { Component } from 'react'

export default class Answer extends Component {
  constructor(props) {
    super(props)
  }
  handleDisagree(e){
    e.preventDefault()
    this.props.disagree()
  }
  render() {
    const { askMessage, disagreed} = this.props
    return (
      <div className="answer-block">
        <div className="answer">
          { disagreed ? 'Definitely your ego' : 'Your ego'}
        </div>
        <div className="ask-again" style={{visibility: disagreed ? 'hidden' : 'visible'}}>
          <button id="ask-again" onClick={this.handleDisagree.bind(this)}>
            {askMessage}
          </button>
        </div>
      </div>
    )
  }
}
