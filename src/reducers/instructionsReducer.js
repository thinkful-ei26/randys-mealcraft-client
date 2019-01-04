// import {FETCH_INSTRUCTIONS_SUCCESS, FETCH_INSTRUCTIONS_REQUEST, FETCH_INSTRUCTIONS_ERROR, GET_RECIPE_ID} from '../actions/getInstructions'

// const initialState = {
//   instructions: [],
//   recipeIds: [],
//   recipes: [],
//   ingredients: [],
//   loading: false,
//   error: null
// }

// const instructionsReducer = (state=initialState, action) => {
//   if (action.type === FETCH_INSTRUCTIONS_REQUEST) {
//     return Object.assign({}, state, {
//       loading: true,
//     })
//   } else if (action.type === FETCH_INSTRUCTIONS_ERROR) {
//     return Object.assign({}, state, {
//       loading: false,
//       error: action.error
//     })
//   } else if (action.type === FETCH_INSTRUCTIONS_SUCCESS) {
//     return Object.assign({}, state, {
//       instructions: action.data,
//       loading: false,
//       error: null
//     })
//   } else if (action.type === GET_RECIPE_ID) {
//     return Object.assign({}, state, {
//       recipeIds: action.id
//     })
//   }
//   return state
// }

// export default instructionsReducer