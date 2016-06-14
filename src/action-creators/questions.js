export function disagree() {
  return {
    type: 'DISAGREE'
  }
}

export function askQuestion() {
  return {
    type: 'ASK_QUESTION'
  }
}

export function changeInput(input) {
  return {
    type: 'CHANGE_INPUT_SIZE',
    input: input
  }
}
