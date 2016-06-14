import { askQuestion, disagree, changeInput} from './reducers/questions.js'
import { Map, List } from 'immutable'

const initialState = Map({
  answered: false,
  disagreed: false,
  askMessage: 'I Disagree',
  inputSize: 10,
  currentInput: '',
})

export default function(state = initialState, action) {
  switch(action.type) {
    case 'ASK_QUESTION':
      return askQuestion(state)
    case 'DISAGREE':
      return disagree(state)
    case 'CHANGE_INPUT_SIZE':
      return changeInput(state, action.input)
  }
  return state
}
