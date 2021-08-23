<template>
<div class="container-md">
  <div class="d-flex justify-content-center">
      <form>
          <label for="search"></label>
          <input type="text" placeholder="Search for Books" v-model="searchTerm" class="mx-3 rounded-pill">
          <button @click.prevent="emitSearch" class="mx-3 btn btn-success text-center">Search</button>
      </form>
  </div>
</div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchTerm: null
        }
    },
    methods: {
        emitSearch(){
            this.$emit('search', this.searchTerm)
        }
    }
}
</script>

<style>

</style>