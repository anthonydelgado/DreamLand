/////////////////////////
// Index page - import and organize all api routes. export for use in server
/////////////////////////
const router = require('express').Router();


router.use('/users', require('./userRouter.js'));
router.use('/review', require('./reviewRouter.js'));
router.use('/favorites', require('./favRouter.js'));

module.exports = router;