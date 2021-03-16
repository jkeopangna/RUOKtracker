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

//JK// - Routes that match with /signup
router
.route('/api/signup')
    //Create new User for DB
    .post(symptomsController.create)

router.route('/api/chart')
    .get(symptomsController.findAllby)

router.route('/api/user/chart')
    .post(symptomsController.findAllby)

module.exports = router;