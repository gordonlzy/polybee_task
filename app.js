const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();

// view engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.listen(3000);

app.use(routes);

app.use((req, res) => {
    res.status(404).json({ title: "404" });
})