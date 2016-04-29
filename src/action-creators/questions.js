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

export function changeInputSize(newSize) {
  return {
    type: 'CHANGE_INPUT_SIZE',
    size: newSize
  }
}
