const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: 'false' }));
app.use(express.json());
app.use('', express.static('public'));
app.listen(PORT, () => {
    console.log("app is running on ", PORT);
})
