const express = require('express');
const router = express.Router();

// Define routes here 



// GET / - Home page displaying all routes
router.get('/', (req, res) => {
    // implement logic to display routes and descriptions
});

// GET /users - display a list of users
router.get('/users', (req, res) => {
    // implement logic to fetch and display users
});

// GET /users/:id - display a single user 
router.get('/user/:id', (req, res) => {
    // implement logic to fetch and display a single user
});

// PUT /user/:id - Update user's record
router.put('user/:id', (req, res) =>{
    // implement logic to update a user's record 
});

// PATCH /user/:id - Modify a user's record 
router.patch('/user/:id', (req, res) => {
    // implement logic to modify a user's record 
});

// This goes on for other routes


module.exports = router;
