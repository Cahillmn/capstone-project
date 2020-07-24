<template>
  <div id="app">
    <header>
      <a href="index.html">
        <img src="./assets/banner.jpg" alt="Logo" />
      </a>
    </header>
    <h1>Dog Breeds</h1>
    <h2>What's a dog breed?</h2>

    <p>
      People have been breeding dogs since prehistoric times. The earliest dog breeders used wolves to create domestic dogs. From the beginning, humans purposefully bred dogs to perform various tasks. Hunting, guarding, and herding are thought to be among the earliest jobs eagerly performed by the animal destined to be called “man’s best friend.”</p>
      <p>For thousands of years, humans bred dogs toward the physical and mental traits best suited for the work expected of them. The sleek Greyhound types bred to chase fleet-footed prey, and the huge mastiff types used as guard dogs and warriors, are two ancient examples of dogs bred for specific jobs.</p>
      <p>As humans became more sophisticated, so did their dogs. Eventually, there emerged specific breeds of dogs, custom-bred to suit the breeders’ local needs and circumstances. The Greyhound, for instance, was the foundation type for the immense Irish Wolfhound and the dainty Italian Greyhound. All three have a distinct family resemblance, but you’d never mistake one for another.</p>
      <p>So, then, when is a breed a breed and not just a kind or type of dog? The simplest way to define a breed is to say it always “breeds true.” That is, breeding a purebred Irish Setter to another purebred Irish Setter will always produce dogs instantly recognizable as Irish Setters.</p>
      <p>Each breed’s ideal physical traits, movement, and temperament are set down in a written document called a “breed standard.” For example, the breed standard sets forth the traits that make a Cocker Spaniel a Cocker Spaniel and not a Springer Spaniel.</p>
      <p>The AKC standard for each breed originates with a “parent club,” the AKC-recognized national club devoted to a particular breed. Once approved by the AKC, a standard becomes both the breeder’s “blueprint” and the instrument used by dog show judges to evaluate a breeder’s work.</p>
      <p>There are over 340 dog breeds known throughout the world. The American Kennel Club recognizes 193 breeds.</p>
    
    <img alt="GOT Logo" src="./assets/logo.png" />
    <h1>Game of Thrones Character Search</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  text-align:left;
}
</style>
