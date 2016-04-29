export function askQuestion(state) {
  const updateAnswer = state.set('answered', true)
  const updateCount = updateAnswer.update('askCount', count => count + 1)
  return generateNewPrompt(updateCount)
}

export function askAgain(state) {
  return state.set('answered', false).set('inputSize', 10)

}

export function changeInputSize(state, newSize) {
  return newSize > 8  ? state.set('inputSize', newSize + 2) : state
}


function generateNewPrompt(state) {
  const count = state.get('askCount')
  if (count <= 1) {
    return state.set('askMessage', state.getIn(['firstAnswer', randomIndex()]))
  } else {
    return state.set('askMessage', state.getIn(['secondAnswer', randomIndex()]))

  }
}

function randomIndex() {
  const number = Math.random()
  if (number < .33) {
    return 0
  } else if ( number < .66) {
    return 1
  } else {
    return 2
  }
}
