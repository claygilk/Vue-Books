<template>
  <div class="home d-flex flex-column align-items-center">
    <div>
      <h1 class="my-5">Search</h1>
    </div>
    <SearchBar @search="callSearchAPI"/>
    <SearchResults :results="searchResults"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
import SearchResults from '@/components/SearchResults.vue'
import BookService from '@/services/BookService.js'

export default {
  name: 'Search',
  components: {
    SearchBar,
    SearchResults,
  },
  data(){
    return{
      searchResults: null
    }
  },
  methods: {
    callSearchAPI(searchTerm){
      BookService.searchForBook(searchTerm)

      .then(response => {
        console.log(response)

        this.searchResults = response.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
