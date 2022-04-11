<template>
  <div id="nav" class="navbar navbar-expand-lg d-flex justify-content-around">
    <router-link to="/" class="mx-4">Book Store</router-link> 
    <router-link to="/shelf" class="mx-4">Book Shelf</router-link>
    <p>Environment: {{ environment }}</p>
    <p>Base Url: {{ baseUrl }}</p>
  </div>
  <router-view/>
</template>

<script>
import Config from "./config.json";

export default {
  name: 'App',
  data: () => {
    return {
      environment: Config.ENV,
      baseUrl: Config.BASE_URL
    }
  }
}
</script>

<style lang="scss">

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #582F0E;
    &.router-link-exact-active {
      color: #A68A64;
    }
  }
}

body{
  background: #B6AD90
}

#nav{
  background: #656D4A
}
</style>
