// YOU WILL LEARN THE STURCTURE OF THIS EXPRESS FILE FROM THOSE VIDEOS
const express = require('express');
const app = express();

// Choose with PORT your server runs on
const PORT = process.env.PORT || 3000;

// Array of inappropriate words
const inappropriateWords = ['word1', 'word2', 'word3', 'word4', 'word5', 'word6', 'word7', 'word8', 'word9', 'word10'];

// THIS IS THE FUNCTION THAT GETS RUN WHEN YOU CALL IT IN THE URL
    //       app.post('/register', checkUsername, (req, res) => {
    //       Your registration logic here
    //       res.send('Registration successful');
//      });

// Middleware to check for inappropriate words
const checkUsername = (req, res, next) => {
    const username = req.body.username;

    // Check if the username contains any inappropriate word
    const hasInappropriateWord = inappropriateWords.some(word => username.includes(word));

    if (hasInappropriateWord) {
        // If an inappropriate word is found, send an error response
        return res.status(400).send('Username contains inappropriate words.');
    }

    // If everything is fine, move to the next middleware
    next();
};

// THIS IS USED AS THE URL FOR USER REGISTRATION
// Using the middleware in a route
app.post('/register', checkUsername, (req, res) => {
    // Your registration logic here
    res.send('Registration successful');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
