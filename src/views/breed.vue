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

    
    <div class="result-list-container"></div>

    <!-- This section defines results that should be returned based on the search -->
    <div class="results-container">
      <spinner v-if="showSpinner"></spinner>
      <div v-if="results && results.length > 0">
        <h2 class="number">{{ results.length }} Results</h2>

        <ul class="results">
          <transition-group name="fade" tag="div" appear>
            <div v-for="(result,index) in results" class="breed" :key="index">
              <img v-bind:src="result" />
            </div>
          </transition-group>
        </ul>
      </div>
      
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
{ val: "airedale", dog: "Airedale Terrier"},
{ val: "akita", dog: "Akita"},
{ val: "eskimo", dog: "American Eskimo"},
{ val: "appenzeller", dog: "Appenzzellar"},
{ val: "cattledog", dog: "Australian Cattledog"},
{ val: "australian", dog: "Australian Shepherd"},
{ val: "basenji", dog: "Basenji"},
{ val: "beagle", dog: "Beagle"},
{ val: "frise", dog: "Bichon Frise"},
{ val: "bluetick", dog: "Bluetick Coonhound"},
{ val: "borzoi", dog: "Borzoi"},
{ val: "bouvier", dog: "Bouvier"},
{ val: "boxer", dog: "Boxer"},
{ val: "brabancon", dog: "Brabancon"},
{ val: "briard", dog: "Briard"},
{ val: "buhund", dog: "Buhund"},
{ val: "bulldog", dog: "Bulldog"},
{ val: "bullterrier", dog: "Bull Terrier"},
{ val: "cairn", dog: "Cairn Terrier"},
{ val: "corgi", dog: "Cardigan Welsh Corgi"},
{ val: "chihuahua", dog: "Chihuahua"},
{ val: "chow", dog: "Chow"},
{ val: "clumber", dog: "Clumber"},
{ val: "cockapoo", dog: "Cockapoo"},
{ val: "collie", dog: "Collie"},
{ val: "coonhound", dog: "Coonhound"},
{ val: "cotondetulear", dog: "Cotondetulear"},
{ val: "dachshund", dog: "Dachshund"},
{ val: "dalmatian", dog: "Dalmation"},
{ val: "dhole", dog: "Dhole"},
{ val: "doberman", dog: "Doberman Pinscher"},
{ val: "springer", dog: "English Springer Spaniel"},
{ val: "entlebucher", dog: "Entlebucher"},
{ val: "finnish", dog: "Finnish Lapphund"},
{ val: "pointer", dog: "German Pointer"},
{ val: "germanshepherd", dog: "German Shepherd"},
{ val: "dane", dog: "Great Dane"},
{ val: "pyrenees", dog: "Great Pyranees"},
{ val: "greyhound", dog: "Greyhound"},
{ val: "groenendael", dog: "Groenendael"},
{ val: "havanese", dog: "Havanese"},
{ val: "hound", dog: "Hound"},
{ val: "husky", dog: "Husky"},
{ val: "wolfhound", dog: "Irish Wolfhound"},
{ val: "keeshond", dog: "Keeshond"},
{ val: "kelpie", dog: "Kelpie"},
{ val: "komondor", dog: "Komondor"},
{ val: "kuvasz", dog: "Kuvasz"},
{ val: "labrador", dog: "Labrador Retriever"},
{ val: "leonberg", dog: "Leonberg"},
{ val: "lhasa", dog: "Lhasa Apsa"},
{ val: "malamute", dog: "Malamute"},
{ val: "malinois", dog: "Malinois"},
{ val: "maltese", dog: "Maltese"},
{ val: "mastiff", dog: "Mastiff"},
{ val: "mexicanhairless", dog: "Mexican Hairless"},
{ val: "pinscher", dog: "Miniature Pinscher"},
{ val: "mix", dog: "Mutt"},
{ val: "mountain", dog: "Mountain Dogs"},
{ val: "newfoundland", dog: "Newfoundland"},
{ val: "elkhound", dog: "Norwegian Elkhound"},
{ val: "otterhound", dog: "Otterhound"},
{ val: "ovcharka", dog: "Ovcharka"},
{ val: "papillon", dog: "Papillon"},
{ val: "pekinese", dog: "Pekinese"},
{ val: "pembroke", dog: "Pembroke Welsh Corgi"},
{ val: "pitbull", dog: "Pitbull"},
{ val: "pomeranian", dog: "Pomeranian"},
{ val: "poodle", dog: "Poodle"},
{ val: "pug", dog: "Pug"},
{ val: "puggle", dog: "Puggle"},
{ val: "redbone", dog: "Redbone Coonhound"},
{ val: "retriever", dog: "Retrievers"},
{ val: "ridgeback", dog: "Rhodesian Ridgeback"},
{ val: "rottweiler", dog: "Rottweiler"},
{ val: "saluki", dog: "Saluki"},
{ val: "samoyed", dog: "Samoyed"},
{ val: "schipperke", dog: "Schipperke"},
{ val: "schnauzer", dog: "Schnauzer"},
{ val: "deerhound", dog: "Scottish Deerhound"},
{ val: "setter", dog: "Setters"},
{ val: "sheepdog", dog: "Sheepdogs"},
{ val: "shiba", dog: "Shiba Inu"},
{ val: "shihtzu", dog: "Shihtzu"},
{ val: "spaniel", dog: "Spaniels"},
{ val: "waterdog", dog: "Spanish Waterdog"},
{ val: "stbernard", dog: "St. Bernard"},
{ val: "terrier", dog: "Terriers"},
{ val: "vizsla", dog: "Vizsla"},
{ val: "weimaraner", dog: "Weimaraner"},
{ val: "whippet", dog: "Whippet"},



        
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

.number {
  padding-top: 20px;
}

.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 25px 20px;
}

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