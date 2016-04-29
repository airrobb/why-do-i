import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import Question from './Question'
import Answer from './Answer'
import * as actionCreators from '../action-creators/questions'

export class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    document.getElementById('care').focus()
  }
  questionSubmit(e) {
    e.preventDefault()
    this.props.askQuestion()
  }
  askAgain() {
    this.refs.care.value = ''
    this.props.askAgain()
    document.getElementById('care').focus()
  }
  resizeInput() {
    this.props.changeInputSize(this.refs.care.value.length)
  }
  render() {
    const answer = this.props.answered ?
     <Answer key="answer" askMessage={this.props.askMessage} askAgain={this.askAgain.bind(this)} /> :
       <div key="placeholder" className="placeholder"></div>
    const book = this.props.answered ?   <div className="amazon" key={2}>
        <div className="row">
          <div className="image-wrapper">
            <a href="http://www.amazon.com/Ego-Enemy-Ryan-Holiday/dp/1591847818/?tag=ryanholnet-20">
              <img src="./img/ego.jpg" alt="" />
            </a>
          </div>
        </div>
      <div className="row">
        <div className="buy-it"><a href="http://www.amazon.com/Ego-Enemy-Ryan-Holiday/dp/1591847818/?tag=ryanholnet-20">Buy</a> the book</div>
      </div>
    </div> : ''
      return (
          <div className="container">
            <div className="align-block">

            <form className="question" onSubmit={this.questionSubmit.bind(this)}>
              <div className="question-text">
                Why the fuck do I care about &nbsp;
                <input onChange={this.resizeInput.bind(this)} size={this.props.inputSize} ref="care" name="care" id="care"  autoComplete="off"/>&nbsp; so much?
              </div>
            </form>
            <div className="spacer">
              <ReactCSSTransitionGroup transitionName="answer" transitionEnterTimeout={1000} transitionLeaveTimeout={1}>
                { answer }
                {book }
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
    askMessage: state.get('askMessage')
  }
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App)
