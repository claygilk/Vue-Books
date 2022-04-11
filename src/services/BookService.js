import axios from 'axios'

var apiURL = window.location.origin + "/api"

// get mybook
// const response = await fetch(apiURL  + "/books/mybook");

export default {

    searchForBook(searchTerm){

        return axios.get(`${apiURL}/books?title=${searchTerm}`)
    }
}