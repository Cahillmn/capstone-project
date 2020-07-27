<template>
<div>

  <!-- The following section provides a dropdown menu of breeds that are submitted to the API -->
  
  <div class="messages">
      <message-container v-bind:messages="messages"></message-container>
    </div>
    <div class="breed-search">
      <form v-on:submit.prevent="findBreed">
       <p>
       <label for="breed">Pick a Breed: 
            <select id="breed" v-model="breed">
              <option value="">Select Breed</option>
              <option>https://dog.ceo/api/breed/hound/images/random/10</option>

            </select>
          </label>
        </p> 
       
        <p>
          <button type="submit">Search</button>
        </p>
      </form>
    </div>
     <!--<div class="breed-search">
      <form v-on:submit.prevent="getBreed">
      <p>
       <label for="breed">Select a Breed:
         <select id="breed" v-model="breed">
         <input type="text" v-model="query" placeholder="Pug" />
        <button type="submit">Search</button>
        </select>
        </label>
      </p>
    </form> 

     <img v-bind:src="'http://openweathermap.org/img/w/' + weatherSummary.icon + '.png'" v-bind:alt="weatherSummary.main"> 
    
    </div> -->
    <div class="result-list-container">
      
    </div>

    <!-- This section defines results that should be returned based on the search -->
    <div class="results-container">

      <spinner v-if="showSpinner"></spinner>
      <h2 v-if="results && results.length > 0">{{ results.length }} Results</h2>
      
       <ul v-if="results && results.length > 0" class="results">
        <transition-group name="fade" tag="div" appear>
          <li v-for="(result,index) in results" class="breed" :key="index">
            <img v-bind:src="results.message">


          </li>

        
        </transition-group>
      </ul> 
      <div v-else-if="results && results.length === 0" class="no-results"> 
        <h2>No Pictures Found</h2>
        <p>Please adjust your search.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
require('vue2-animate/dist/vue2-animate.min.css');
import CubeSpinner from '@/components/CubeSpinner';
import MessageContainer from '@/components/MessageContainer';
export default {
  name: 'breed',
  components: {
    spinner: CubeSpinner,
    'message-container': MessageContainer
  
  },
  data () {
    return {
      results: null,
      // wordList: [],
      message: [],
      status: '',
      showSpinner: false,
      apiKey:'26f70159-b7e5-43fd-bb7a-a7669a0072f8'
    }
  },
  /*fetchImages () {
    return axios({
      method: 'get',
      url: 'https://dog.ceo/api/breed/hound/images/random/10',
      params: [],
      showSpinner: false
    })
  },*/
  methods: {
    findBreed: function() {
      this.showSpinner = true;
      this.results = null;
        axios.get('https://dog.ceo/api/breed/+{{breed}}+/images/random/10', {
        params: {
          breed: this.breed,
        }
      })
      .then( response => {
        this.showSpinner = false;
        this.results = response.data;
      })
      .catch( error => {
        this.showSpinner = false;
        this.messages.push({
          type: 'error',
          text: error.message
        });
      })
    }
  }
}
</script>

<style scoped>

button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  border-radius: 0;
}

h1,
h2 {
  font-weight: normal;
  text-align: center;
}

.results li {
  text-align: left;
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 300px;
  min-height: 150px;
  color: gold;
  font-weight: 300;
  font-size: 1.2rem;
  background: black;
  
  
}
.link {
  text-align: center;
}

a {
  color: white;
} 
</style>