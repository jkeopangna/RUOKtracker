import axios from "axios";

export default {

//JK// - Get the data from when a user enters symptoms
getPost: function() {
    return axios.get("/api/user")
},


}