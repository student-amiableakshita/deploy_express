const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World! Your server is running.');
});

app.get("/page", (req, res) => {
    res.render("index");
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
