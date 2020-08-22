##################################################
# wats4030-capstone-project

Fido Finder
Created by: Meghan Cahill
Version 1.0
Last updated 8/22/20
##################################################

## Project description

This application allows users to search for pictures of dogs based on breed. A maximum of 12 pictures will be returned after a user selects a breed and clicks on search.


The application was built off of the API, https://dog.ceo/api/breed/ using Vue.js

## Folder contents description

==> The assets folder contains the images used in the application
==> The components folder includes vues to drive functionality in the application such as CubeSpinner.vue, MessageContainer.vue, and MessageItem.vue.
==> The router folder contains the index.js file where components used in the application and paths to these components are stored.
==> the views folder contain the following files:
        ==>breed.vue contains the search function including a dropdown list of dog breeds to choose from as well as a submit button. This page also includes the connection to the API and the key required to access the API.
        ==>App.vue contains text, images and other content rendered on the page.  

## Challenges using the API

The API is fairly straightforward. The only challenge I had was that the pictures rendered were different sizes which required styling to standardize the size.

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
