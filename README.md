MealCraft is a recipe search app that finds the internet's 50 most popular recipes based on whatever ingredient you search for. If you have extra ingredients in the fridge that need finishing, or bought something new and want to try a different recipe, use MealCraft for a quick and easy search. Once registering for an account, you can save all your favorite recipes to view whenever you like.

[MealCraft](https://mysterious-shore-62539.herokuapp.com)

[Server Repo](https://github.com/thinkful-ei26/randys-mealcraft-server)

Sample user: username: testuser, password: password123

Landing Page
![landing page](https://user-images.githubusercontent.com/37937433/51055065-bcf14f00-15ac-11e9-9fda-ef65d0dd1065.png)

Registration Page
![registration page](https://user-images.githubusercontent.com/37937433/51054984-81568500-15ac-11e9-8e90-03fff8246d44.png)

Search Results
![search results](https://user-images.githubusercontent.com/37937433/51055101-d5616980-15ac-11e9-8af6-6b5bf854a547.png)

User Dashboard
![user dashboard](https://user-images.githubusercontent.com/37937433/51055089-cf6b8880-15ac-11e9-908c-a27d9df31577.png)

My Recipes
![my recipes](https://user-images.githubusercontent.com/37937433/51055079-c67ab700-15ac-11e9-84fb-56f21564daf7.png)

MealCraft is a full-stack app utilizing React for frontend, Redux for state management, Node/Express for backend, MongoDB for the database and JWTs for user authentication. 

MealCraft Codebase:
  Actions
    -auth.js: handles user authentication with JWTs
    -deleteRecipes.js: handles deleting recipes from state and database
    -getInstructions.js: handles API call to fetch a specific recipes instructions and adds them to the state
    -hideInstructions.js: deletes recipe instructions from the recipe object
    -saveRecipes.js: adds a recipe to a specific user in database
    -searchRecipes.js: handles API call for recipes and updates recipes state
    -showSavedRecipes.js: updates recipes state with the saved recipes of the current user
    -users.js: handles user registration in the database
  
  Components
    -app.js: main component
    -dashboard.js: renders when a user is logged in. contains navbar, searchform, and recipeslist
    -delete-recipe-button.js: calls deleteRecipes actions
    -hide-instructions-button.js: calls hideInstructions actions
    -input.js: input handling for forms
    -instructions-button.js: calls getInstructions actions
    -instructions-list.js: renders recipe instructions
    -login-form: handles user login
    -my-recipes-button: calls showSavedRecipes actions
    -recipe.js: renders the different properties of a recipe item
    -recipes-list.js: renders the recipes items as a list of search results
    -registration-form: handles users actions
    -registration-page: renders registration form
    -requires-login.js: makes dashboard only available after login
    -save-recipe-button: handles saveRecipe actions
    -search-form: handles searchRecipes actions
    -top-nav.js: nav bar containing login, registration, and myRecipes components
    -update-recipe-button.js: feature not yet implemented

    Reducers
      -auth.js: updates auth state regarding current users and logins
      -recipesReducer: updates all recipe related states from different recipe actions

API
.
├── /auth
│   └── POST
│       ├── /login
│       └── /refresh
├── /users
│   └── POST
│       └── /
├── /recipes
│   └── GET
│       ├── /
│       ├── /:id
│   └── POST
│       └── /
│   └── PUT
│       ├── /:id
│   └── DELETE
│       └── /:id
