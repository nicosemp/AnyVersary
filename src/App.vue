<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div id="nav" class="d-flex align-items-center p-3">
    <img src="@/assets/logo.png" alt="" />
    <h1 class="flex-grow-1">AnyVersary</h1>
    <p class="mb-0">
      Input your Anniversary and find all your other "Versaries"
    </p>
  </div>
  <router-view />
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap')

#app
  font-family: 'Roboto', sans-serif

#nav
  img
    height: 80px

  // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
</style>
