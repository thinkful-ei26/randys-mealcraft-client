import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import recipesReducer from './reducers/recipesReducer'
import {setAuthToken, refreshAuthToken} from './actions/auth';
import rootReducer from './reducers';
import instructionsReducer from './reducers/instructionsReducer';

const store = createStore(
  combineReducers({
    rootReducer,
    form: formReducer,
    auth: authReducer,
    recipes: recipesReducer,
    instructions: instructionsReducer
  }),
  applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;