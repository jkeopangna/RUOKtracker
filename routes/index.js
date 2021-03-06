const router = require('express').Router();
const symptomsController = require('../controllers/symptomsController');

//JK// - Routes that match with /userpage
router
.route('/api/userpage')
    //Post symptoms to the DB
    .post(symptomsController.create)

//JK// - Routes that match with /viewcharts
router
.route('/api/viewcharts')
    //Get symptom data from DB
    .get(symptomsController.find)

//JK// - Routes for the creating a user
      // AND getting a user's data when logged in 

module.exports = router;