const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys"); //move to .env file once running.
// Load input validation
const validateRegisterInput = require("../routes/register");
const validateLoginInput = require("..\/routes/login");
// Load User model
const User = require("../models/user");

router.post("/register", (req, res) => {
  console.log("the register works")
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  console.log('err==>>', errors, 'isvall==>>', isValid)

  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ username: req.body.username}).then(user => {
      if (user) {
        return res.status(400).json({ username: "Username already exists" });
      } else {
        const newUser = new User({
          username: req.body.username,
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => res.send(err));
          });
        });
      }
    });
  });




router.post("/login", (req, res) => {
  console.log("the login works")
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const username = req.body.username;
    const password = req.body.password;
  // Find user by username
    User.findOne({ username }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ usernamenotfound: "username not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });



  module.exports = router;