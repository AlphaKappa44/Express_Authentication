const dotenv = require('dotenv');
const express = require('express');
dotenv.config();

const PORT = process.env.PORT || 2704;


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));

const session = require('express-session');
app.use(session({
  saveUninitialized: true,
  resave: true, 
  secret: 'RobinRules'
}));

const router = require('./app/router')
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});