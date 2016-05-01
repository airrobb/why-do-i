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
  inputChangeCallback(input) {
    this.props.changeInput(input)
  }
  askQuestionCallback() {
    this.props.askQuestion()
  }
  askAgainCallback(){
    this.props.askAgain()
    document.getElementById('care').focus()
  }


  render() {
    const { answered, inputSize, askMessage, currentInput } = this.props
    const transitionGroup = answered ? [
      <Answer key="answer" askMessage={askMessage} askAgain={this.askAgainCallback.bind(this)} />
      ,<Book key="book"/>] :  <div key="placeholder" className="placeholder"></div>
      return (
        <div className="container">
          <div className="align-block">
            <Question currentInput={currentInput}
                  inputSize={inputSize}
                  inputChange={this.inputChangeCallback.bind(this)}
                  askQuestion={this.askQuestionCallback.bind(this)}
                  askAgainCallback={this.askAgainCallback.bind(this)}/>
          <div className="spacer">
            <ReactCSSTransitionGroup
              transitionName="answer" 
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1}>
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
