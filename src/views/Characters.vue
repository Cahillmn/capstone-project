<template>
<div>

  <!-- The following section provides a dropdown menu of characters that are submitted to the API -->

  <div class="messages">
      <message-container v-bind:messages="messages"></message-container>
    </div>
    <div class="characters-search">
      <form v-on:submit.prevent="findCharacters">
       <p>
       <label for="name">Pick a Character: 
            <select id="name" v-model="name">
              <option value="">Select Character</option>
              <option> Petyr Baelish</option>
              <option> Joffrey Baratheon</option>
              <option> Stannis Baratheon</option>
              <option> Tommen Baratheon</option>
              <option> Roose Bolton</option>
              <option> Brienne of Tarth</option>
              <option> Sandor Clegane</option>
              <option> Drogo</option>
              <option> Walder Frey</option>
              <option> Gilly</option>
              <option> Grey Worm</option>
              <option> Theon Greyjoy</option>
              <option> Cersei Lannister</option>
              <option> Jaime Lannister</option>
              <option> Tyrion Lannister</option>
              <option> Tywin Lannister</option>
              <option> Melisandre</option>
              <option> Jeor Mormont</option>
              <option> Jorah Mormont</option>
              <option> Pycelle</option>
              <option> Jon Snow</option>
              <option> Ramsay Snow</option>
              <option> Arya Stark</option>
              <option> Brandon Stark</option>
              <option> Catelyn Stark</option>
              <option> Eddard Stark</option>
              <option> Robb Stark</option>
              <option> Sansa Stark</option>
              <option> Daenerys Targaryen</option>
              <option> Viserys Targaryen</option>
              <option> Samwell Tarly</option>
              <option> Margaery Tyrell</option>
              <option> Varys</option>
              <option> Ygritte</option>

            </select>
          </label>
        </p> 
       
        <p>
          <button type="submit">Search</button>
        </p>
      </form>
    </div>
    <div class="result-list-container">
      
    </div>

    <!-- This section defines results that should be returned based on the search -->
    <div class="results-container">

      <spinner v-if="showSpinner"></spinner>
      <h2 v-if="results && results.length > 0">{{ results.length }} Characters Found</h2>
      <ul v-if="results && results.length > 0" class="results">
        <transition-group name="fade" tag="div" appear>
        
        <li v-for="(result,index) in results" class="item" :key="index">
          <h2 class="result-characters">{{ result.name }}</h2>
          
          <p class= link>
          <router-link
            v-bind:to="{ name: 'CharacterDetails', params: { url: result.url } }">
          Learn more</router-link>
        </p> 
        </li>
        </transition-group>
      </ul>
      <div v-else-if="results && results.length === 0" class="no-results">
        <h2>No Characters Found</h2>
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
  name: 'Characters',
  components: {
    spinner: CubeSpinner,
    'message-container': MessageContainer
  
  },
  data () {
    return {
      results: null,
      wordList: [],
      messages: [],
      url: '',
      name: '',
      gender: '',
      culture: '',
      born: '',
      died: '',
      titles: [],
      allegiances: [],
      playedBy: [],
      showSpinner: false
    }
  },
  methods: {
    findCharacters: function() {
      this.showSpinner = true;
      this.results = null;
      axios.get('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50', {
        params: {
          name: this.name,
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