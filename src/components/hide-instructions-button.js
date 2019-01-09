import React from 'react';
import {connect} from 'react-redux';
import '../stylesheets/hide-instructions-button.css'


// import recipesReducer from '../reducers/recipesReducer';
import {hideRecipeInstructions} from '../actions/hideInstructions'


export class HideInstructionsButton extends React.Component {
    onClick() {
      return this.props.dispatch(hideRecipeInstructions(this.props.recipeId))
    }

    render() {

      return (
           <button 
              onClick={() => this.onClick()}
           >Hide Instructions</button>
      );
  }
}

const mapStateToProps = state => {
  // console.log('instructions state', state.instructions.instructions)
  return {
    instructions: state.recipes.instructions
  }
};

export default connect(mapStateToProps)(HideInstructionsButton);