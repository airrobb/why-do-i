import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Question from './Question'
import Answer from './Answer'
import Book from './Book'
import * as actionCreators from '../action-creators/questions'

export class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    document.getElementById('care').focus()
  }
  inputChange(input) {
    this.props.changeInput(input)
  }
  questionCallback() {
    this.props.askQuestion()
  }
  askAgainCallback(){
    this.props.askAgain()
  }
  askAgain() {
    this.props.askAgain()
    document.getElementById('care').focus()
  }

  render() {
    const transitionGroup = this.props.answered ? [
      <Answer key="answer" askMessage={this.props.askMessage} askAgain={this.askAgain.bind(this)} />
      ,<Book key="book"/>] :  <div key="placeholder" className="placeholder"></div>
      return (
        <div className="container">
          <div className="align-block">
            <Question currentInput={this.props.currentInput}
                  inputSize={this.props.inputSize}
                  inputChange={this.inputChange.bind(this)}
                  questionCallback={this.questionCallback.bind(this)}
                  askAgainCallback={this.askAgainCallback.bind(this)}/>
          <div className="spacer">
            <ReactCSSTransitionGroup transitionName="answer" transitionEnterTimeout={1000} transitionLeaveTimeout={1}>
              { transitionGroup }
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    answered: state.get('answered'),
    inputSize: state.get('inputSize'),
    askMessage: state.get('askMessage'),
    currentInput: state.get('currentInput')
  }
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App)
