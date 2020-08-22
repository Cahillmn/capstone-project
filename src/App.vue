
<template>
<body class="home">
  <div id="app">
    
    <header>
      <div class='container' id='nav'>
      
      <h1 class='headline'>Fido Finder</h1>
      
    </div>
    </header>

    <div>
      <a href="index.html">
        <img class="banner" src="./assets/Banner.jpg" alt="Logo">
      </a>
    </div>
    
    
    <h2>Dog Breeds</h2>
    <h3>What is a dog breed?</h3>

    <p>
      People have been breeding dogs since prehistoric times. The earliest dog breeders used wolves to create domestic dogs. From the beginning, humans purposefully bred dogs to perform various tasks. Hunting, guarding, and herding are thought to be among the earliest jobs eagerly performed by the animal destined to be called “man’s best friend.”</p>
      
      <p>Eventually, there emerged specific breeds of dogs, custom-bred to suit the breeders’ local needs and circumstances. The Greyhound, for instance, was the foundation type for the immense Irish Wolfhound and the dainty Italian Greyhound. All three have a distinct family resemblance, but you’d never mistake one for another.</p>
    
    
    <router-view />

  </div> <!--closing app div -->
  </body>
</template>

<script>
export default {
  name: "App"
  
};
</script>

<style>
*{
    padding:0;
    margin:0;
}

@font-face {
    font-family: 'architects_daughterregular';
    src: url('../fonts/architectsdaughter-webfont.woff2') format('woff2'),
         url('../fonts/architectsdaughter-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

body{
            
            background-image:url(./assets/paws.jpeg);
            background-attachment: fixed;
            font-family:verdana, helvitica, sans-serif;
            font-size:100%;
        }

#app {
  width:980px;
  margin: 150px auto 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif; 
  text-align: center;
  margin-top: 60px;
  overflow:hidden;
  background-color: rgb(225, 239, 243);
}

#app p {
  padding:0px 20px;
}


header {
  margin-bottom: 30px;
  padding-top: 30px;
}

h1 {

    text-decoration: none;
    font-family: 'architects_daughterregular';
}


h2 {

  padding-top: 10px;
  padding-bottom: 10px;
}

h3 {
  padding-bottom: 10px;
}

p {
  text-align:left;
  margin-bottom: 20px;
  font-size: 1.4em;
}



.left {
  float:left;
}

.right {
  float:right;
}
</style>
