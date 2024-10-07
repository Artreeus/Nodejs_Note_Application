require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = expres();
const port = 5000 || Process.env.PORT;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

// static files 

app.use(express.static('public'));

// Templeting engine 

app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

app.get('/', function(req,res){
    res.render('index');
} );

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});