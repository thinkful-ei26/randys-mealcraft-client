import React from 'react';
import {connect} from 'react-redux';

// import recipesReducer from '../reducers/recipesReducer';
import {fetchRecipeInstructions} from '../actions/getInstructions'


export class InstructionsButton extends React.Component {
    onClick() {
      return this.props.dispatch(fetchRecipeInstructions(this.props.recipeId))
    }

    render() {

      return (
           <button 
              onClick={() => this.onClick()}
           >Show Instructions</button>
      );
  }
}

const mapStateToProps = state => {
  return {
    instructions: state.recipes.instructions
  }
};

export default connect(mapStateToProps)(InstructionsButton);