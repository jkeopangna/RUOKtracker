import axios from "axios";

export default {

//JK// - Post the data from when a user enters symptoms
logSymptoms: function(symptoms) {
    return axios.post("/api/userpage", symptoms)
},

// //JK// - Get the data to view the charts
getSymptoms: function() {
    return axios.get("/api/viewcharts")
},

// //JK// - Get the data when someone logs in
// logIn: function() {
//     return axios.get("")
// },

//JK// - Add a new user when someone signs up
newUser: function(user) {
    return axios.post("/api/signup", user)
},

logIn: function(user) {
     return axios.post("/api/users/login", user)
 },
 
 Register: function(user) {
    return axios.post("/api/users/register", user)
},

findAll: function(user) {
    return axios.post('/api/user/chart', user)
}

} 