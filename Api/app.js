const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')  // Third-party middleware to add functionality to Express apps.
const port = process.env.PORT || 3000;

// require routes
const routes = require("./routes");

// Middleware 
app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {  // error handling middleware
    console.error(err.stack)
    res.status(500).send('Somme broke bruv!')
});

app.use(cookieParser()) // Load the cookie-parsing middleware

// Use routes 
app.use("/", routes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});


// bcrypt is an authentication middleware