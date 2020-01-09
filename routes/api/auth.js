const express = require('express');
const router = express.Router();
//adding protection
const auth = require('../../middleware/auth')

const User = require('../../models/Users')

//@route    GET api/auth
//@desc     Test route
//@access   Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await Uswer.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error')
    }
});

module.exports = router;