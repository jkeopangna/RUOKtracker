const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
//const passport = require("./config/passport");

const users = require("./routes/users");

const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

//JK// - Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/UserSymptoms");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
else {
  app.use(express.static("public"));
}

// Passport middleware
app.use(passport.initialize());
app.use(session({secret: "keyboard cat", resave: false, saveUninitialized: false}))
app.use(passport.session())
// Define API routes here
const routes = require("./routes");
app.use(routes);

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
