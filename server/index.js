const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(express.urlencoded({extended:false}));

app.use('/api/v1',require('./app/routes'));

const PORT = 3001;
app.listen(PORT,()=>{console.log('Server is listening at port '+PORT)})