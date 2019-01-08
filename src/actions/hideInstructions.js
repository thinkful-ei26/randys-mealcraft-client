export const HIDE_INSTRUCTIONS_SUCCESS = 'HIDE_INSTRUCTIONS_SUCCESS'
export const hideInstructionsSuccess = (id, data) => {
  return {
    type: HIDE_INSTRUCTIONS_SUCCESS,
    id,
    data
  }
}

export const HIDE_INSTRUCTIONS_REQUEST = 'HIDE_INSTRUCTIONS_REQUEST'
export const hideInstructionsRequest = (data) => {
  return {
    type: HIDE_INSTRUCTIONS_REQUEST,
  }
}

export const HIDE_INSTRUCTIONS_ERROR = 'HIDE_INSTRUCTIONS_REQUEST'
export const hideInstructionsError = (error) => {
  return {
    type: HIDE_INSTRUCTIONS_REQUEST,
    error
  }
}

export const hideRecipeInstructions = (id) => dispatch => {
  dispatch(hideInstructionsRequest())
  dispatch(hideInstructionsSuccess(id))
}
