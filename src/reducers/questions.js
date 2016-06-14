export function askQuestion(state) {
  return state.set('answered', true)
}

export function disagree(state) {
  return state.set('disagreed', true)
}

export function changeInput(state, input) {
  const nextSize = input.length > 8  ?
  state.set('inputSize', input.length + 3) :
  state.set('inputSize', 10)
  return nextSize.set('currentInput', input)
}
