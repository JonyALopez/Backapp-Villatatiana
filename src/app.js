const express = require('express');
const cors =require('cors')
const app = express();
require('dotenv').config();

//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));

//settings
app.set('port', process.env.PORT || 5000);

//routes
app.listen(app.get('port'), ()=> {
    console.log('server listen on port', app.get('port'));
});