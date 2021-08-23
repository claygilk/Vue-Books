import axios from 'axios'

export default {

    searchForBook(searchTerm){

        return axios.get(`https://node-books-api-3-atfvujdraq-uc.a.run.app/books?title=${searchTerm}`)
    }
}