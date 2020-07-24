##################################################
# wats4000-final-project

Game of Thrones Character Search
Created by: Meghan Cahill
Version 1.0
Last updated 6/10/20
##################################################

## Project description

This application allows users to search for a Game of Thrones character by name. Upon Submit, all of the characters with the name selected appear and the user can click on 
a link to learn more about that character.  The character details page displays information such as gender, born, died, titles, and the actors who playes the character in the HBO Game of Thrones series.

The application was built off of the API, https://anapioficeandfire.com/ using Vue.js

## Folder contents description

==> The asstets folder contains the image used in the application
==> The components folder includes vues to drive functionality in the application such as CubeSpinner.vue, MessageContainer.vue, and MessageItem.vue.
==> The router folder contains the index.js file where components used in the application and paths to these components are stored.
==> the views folder contain the following files:
        ==>Characters.vue contains the search function including a dropdown list of characters to choose from as well as a submit button. Initial results render on this home page.  
        ==>CharacterDetails.vue contains the information on the character selected. 

## Challenges using the API

The API is challenging to work with in that many fields are not populated for characters and the selection for filters is limited.  This influenced the design of the application.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
