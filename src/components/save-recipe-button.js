import React from 'react';
import {connect} from 'react-redux';

// import recipesReducer from '../reducers/recipesReducer';
import {fetchRecipeInstructions} from '../actions/getInstructions'


export class SaveRecipeButton extends React.Component {
    onClick() {
      console.log('save recipe button clicked')
      // return this.props.dispatch(fetchRecipeInstructions(this.props.recipeId))
    }

    render() {

      return (
           <button 
              onClick={() => this.onClick()}
           >Save This Recipe</button>
      );
  }
}

const mapStateToProps = state => {
  // console.log('instructions state', state.instructions.instructions)
  return {
    instructions: state.recipes.instructions
  }
};

export default connect(mapStateToProps)(SaveRecipeButton);