const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    res.render('home', {pageTitle:"Node.JS Template - Home", youAreUsingPug: true,  foo: true});
});


module.exports = router;