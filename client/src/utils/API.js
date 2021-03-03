import axios from "axios";

export default {

//JK// - Get the data from when a user enters symptoms
savePost: function(saveData) {
    return axios.get("/api/Symptoms", saveData)
},


}