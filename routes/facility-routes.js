// routes/facility-routes.js

const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth-controller.js');
const userMiddleware = require('../middleware/auth-middleware.js');
const userController = require('../controllers/user-controller.js');
const collectorController = require('../controllers/collector-controller.js');
const orderController = require('../controllers/order-controller.js');
const contentController = require('../controllers/content-controller.js');
const facilityController = require('../controllers/facility-controller.js');


// Route to update facility name by user ID
router.put('/update-facility-name/:id', userMiddleware.userAuthorization('collector'), facilityController.updateFacilityName);
// Route to get user data by facility ID
router.get('/user-data/:id', userMiddleware.userAuthorization('collector'), facilityController.getUserDataById);

module.exports = router;