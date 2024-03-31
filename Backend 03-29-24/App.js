const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./Routes');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(bodyParser.json());
app.use('/', routes)

mongoose.connect('mongodb+srv://tarangverma004:Tar%4012345@cluster0.cl6inb5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('connected to db')
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
})

