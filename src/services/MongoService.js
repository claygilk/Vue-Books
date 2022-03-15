import axios from 'axios'

export default {

    getAllBooks(){

        // return axios.get(`http://localhost:3000/books/all`)
        return axios.get(`https://node-books-db-2-atfvujdraq-uc.a.run.app/books/all`)
    }
}