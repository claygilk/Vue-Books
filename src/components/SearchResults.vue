<template>
  <div>
    <ul>
      <li v-for="book in results" :key="book.id" class="my-2 mx-4 d-flex justify-content-between ">
        <img v-if="book.volumeInfo.imageLinks" :src="book.volumeInfo.imageLinks.smallThumbnail" >
        <img v-else src="https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png" id="not-found">

        <span class="lead">{{book.volumeInfo.title}}</span>
        
        <span v-if="book.volumeInfo.authors">{{book.volumeInfo.authors[0]}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'SearchResults',
    props: {
      results: Array
    }
}
</script>

<style>
li{
  list-style-type: none;
}
#not-found{
  width:128px;
  height: 192px;
}
</style>