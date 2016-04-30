import React, { Component } from 'react'

export default class Question extends Component {
  constructor(props) {
    super(props)
  }
  resizeInput() {
    this.props.inputChange(this.refs.care.value)
  }
  questionSubmit(e) {
    e.preventDefault()
    this.props.askQuestion()
  }
  render() {
    const { inputSize, currentInput } = this.props
    return (
      <form className="question" onSubmit={this.questionSubmit.bind(this)}>
        <div className="question-text">
          Why the fuck do I care about &nbsp;
          <input onChange={this.resizeInput.bind(this)}
                 size={inputSize}
                 value={currentInput}
                 ref="care"
                 name="care"
                 id="care"
                 autoComplete="off"/>
          &nbsp; so much?
        </div>
      </form>
    )
  }
}
