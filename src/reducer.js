import { askQuestion, askAgain, changeInput} from './reducers/questions.js'
import { Map, List } from 'immutable'

const initialState = Map({
  answered: false,
  askMessage: 'You\'re Wrong',
  inputSize: 10,
  currentInput: '',
  askCount: 0,
  firstAnswer: List.of('I disagree', 'Yeah, but what about', 'I think you\'re wrong'),
  secondAnswer: List.of('Yup, still your ego', 'Nope, its your ego', 'This answer isn\'t gonna change')
})

export default function(state = initialState, action) {
  switch(action.type) {
    case 'ASK_QUESTION':
      return askQuestion(state)
    case 'ASK_AGAIN':
      return askAgain(state)
    case 'CHANGE_INPUT_SIZE':
      return changeInput(state, action.input)
  }
  return state
}
