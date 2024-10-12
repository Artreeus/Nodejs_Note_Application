require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 5000 || Process.env.PORT;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

// static files 

app.use(express.static('public'));

// Templeting engine 

app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs');


// Routes 

app.use('/', require('./server/routes/index'));

// handeling 404
app.get('*', function(req,res){
    res.status(404).render('404')
})


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});