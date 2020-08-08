<template>
  <div>
    <!-- The following section provides a dropdown menu of breeds that are submitted to the API -->

    <div class="messages">
      <message-container v-bind:messages="messages"></message-container>
    </div>
    <div class="breed-search">
      <form v-on:submit.prevent="findBreed">
        <p>
          <label for="breed">To find pictures of your favorite, pick a breed:</label>
          <select id="breed" class="select" v-model="breed">
            <option v-for="item in breedli" v-bind:value="item.val" :key="item.val">{{item.dog}}</option>
          </select>
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
    
    </div>-->
    <div class="result-list-container"></div>

    <!-- This section defines results that should be returned based on the search -->
    <div class="results-container">
      <spinner v-if="showSpinner"></spinner>
      <div v-if="results && results.length > 0">
        <h2>{{ results.length }} Results</h2>

        <ul class="results">
          <transition-group name="fade" tag="div" appear>
            <div v-for="(result,index) in results" class="breed" :key="index">
              <img v-bind:src="result" />
            </div>
          </transition-group>
        </ul>
      </div>
      <!-- <div v-else class="no-results">
        <h2>No Pictures Found</h2>
        <p>Please adjust your search.</p>
      </div> -->
    </div>
    <footer> 

      <ul>
        <li>Images from Dog API</li>
        <li>Text from AKC.org</li>
      </ul> 

    </footer>
  </div>
  
</template>

<script>
import axios from "axios";
require("vue2-animate/dist/vue2-animate.min.css");
import CubeSpinner from "@/components/CubeSpinner";
import MessageContainer from "@/components/MessageContainer";
export default {
  name: "breed",
  components: {
    spinner: CubeSpinner,
    "message-container": MessageContainer,
  },
  data() {
    return {
      results: null,
      // wordList: [],
      breed: "",
      breedli: [
        { val: "affenpinscher", dog: "Affenpinscher"},
        { val: "airedale", dog: "Airdale"},
        { val: "akita", dog: "Akita"},
        { val: "australian", dog: "Australian Shepherd"},
        { val: "basenji", dog: "Basenji"},
        { val: "frise", dog: "Bichon Frise"},
        { val: "corgi", dog: "Cardigan Welsh Corgi"},
        { val: "pembroke", dog: "Pembroke Welsh Corgi"},
        { val: "pug", dog: "Pug" },
        { val: "chihuahua", dog: "Chihuahua"},
        { val: "corgi", dog: "Cardigan Welsh Corgi"},
        { val: "terrier", dog: "Terriers"},
        { val: "retriever", dog: "Retrievers"},
        { val: "pekinese", dog: "Pekinese" },
        
      ],
      url: "",
      messages: [],
      status: "",
      showSpinner: false,
      apiKey: "26f70159-b7e5-43fd-bb7a-a7669a0072f8",
    };
  },

  methods: {
    findBreed: function () {
      this.showSpinner = true;
      this.results = null;
      this.url =
        "https://dog.ceo/api/breed/" + this.breed + "/images/random/12";
      axios({
        url: this.url,
        method: "get",
      })
        .then((response) => {
          this.showSpinner = false;
          this.results = response.data.message;
        })
        .catch((error) => {
          this.showSpinner = false;
          this.messages.push({
            type: "error",
            text: error.message,
          });
        });
    },
  },
};
</script>

<style scoped>
*{
    padding:0;
    margin:0;
}

button {
  background: #333;
  padding: .5rem;
  margin-left:10px;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.0rem;
  border-radius: 0;
}

h1,
h2 {
  font-weight: normal;
  text-align: center;
}

.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 25px 20px;
}

/* .results li {
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
} */
.link {
  text-align: center;
}

a {
  color: white;
}
img {
    float: left;
     width:300px;
     height:300px;
     /* max-width: 100%; */
     /* max-height: 100%; */
    margin-right: 20px;
    margin-bottom: 20px;
    display:block;
    background-color: rgb(225, 239, 243);
}

.select {
  margin-left: 20px;
}
.results {
  padding-top: 20px;
  padding-left: 20px;
}
.results li:nth-child(3), 
.results li:nth-child(6),
.results li:nth-child(9),
.results li:nth-child(12) {
    margin-right: 0;
   
    
}

.no-results {
  padding-bottom: 20px;
}

footer {
    padding-top: 10px;
    margin-top: 20px;
    height: 50px;
    line-height: 50px;
    clear:both;
    border-top:1px solid #aaa;
}

footer li {
    float:left;
    list-style-type:none;
    margin-left: 225px;
    font-style: italic;
}


</style>