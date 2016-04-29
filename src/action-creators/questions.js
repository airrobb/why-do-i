export function askQuestion() {
  return {
    type: 'ASK_QUESTION'
  }
}

export function askAgain() {
  return {
    type: 'ASK_AGAIN'
  }
}

export function changeInput(input) {
  return {
    type: 'CHANGE_INPUT_SIZE',
    input: input
  }
}
