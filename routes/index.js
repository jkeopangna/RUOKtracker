const router = require('express').Router();
const symptomsController = require('../controllers/symptomsController');

//JK// - Routes that match with /userpage
router.route('/userpage')
    //Post symptoms to the DB
    .post(symptomsController.create)

//JK// - Routes that match with /viewcharts
router.route('/viewcharts')
    //Get symptom data from DB
    .get(symptomsController.findbyId)

//JK// - Routes for the creating a user
      // AND getting a user's data when logged in 