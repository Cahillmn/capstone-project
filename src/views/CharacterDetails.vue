<template>
  <div>
    
    <!-- The results that are returned when a user clicks on learn more in the Characters.vue page -->

    <div v-if="results">
      <h2 class="Name">{{ this.results.name }}</h2>
      <p class="label">Gender:</p>
      <p>{{ this.results.gender}}</p>
      <p class="label">Born:</p>
      <p>{{ this.results.born }}</p>
      <p class="label">Died:</p>
      <p>{{ this.results.died }}</p>
      <p class="label">Titles:</p>
      <ul v-if="results.titles">
        <li v-for="titles in results.titles" :key="titles">{{ titles }}</li>
      </ul>
      <p class="label">Played by:</p>
      <ul v-if="results.playedBy">
        <li v-for="actor in results.playedBy" :key="actor">{{ actor }}</li>
      </ul>

      <p>
        <router-link to="/">Home</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

require("vue2-animate/dist/vue2-animate.min.css");

export default {
  name: "CharacterDetails",
  
  data() {
    return {
      results: null,
      wordList: [],
      messages: [],
      url: "",
      name: "",
      gender: "",
      culture: "",
      born: "",
      died: "",
      titles: [],
      allegiances: [],
      playedBy: [],
      showSpinner: false
    };
  },
  created() {
    axios
      .get(this.$route.params.url)
      .then(response => {
        this.results = response.data;
        console.log(response.data);
      })
      .catch(error => {
        this.errors.push(error);
      });
  },
  
  methods: {
    findCharacters: function() {
      this.showSpinner = true;
      this.results = null;
      axios
        .get(
          "https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50",
          {
            params: {
              gender: this.gender
            }
          }
        )
        .then(response => {
          this.showSpinner = false;
          this.results = response.data;
        })
        .catch(error => {
          this.showSpinner = false;
          this.messages.push({
            type: "error",
            text: error.message
          });
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
h2.Name {
  
  font-weight: Bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;

  padding: 10px;
}
.label {
  font-weight: bold;
}
</style>

