<template>
    <h1>Your Bookshelf</h1>
    <ul>
        <li v-for="book in bookList" :key="book._id">
            {{book.title}}
        </li>
    </ul>
  
</template>

<script>
import MongoService from '../services/MongoService'

export default {
    data(){
        return{
            bookList: null
        }
    },
    created(){
        
        MongoService.getAllBooks()
            .then(response => {
                
                console.log(response)
                this.bookList = response.data
            })
            .catch(err => {

                console.log(err)
            })
    }
}
</script>

<style>

</style>
