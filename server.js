'use strict'
//const express = require('express');
const app = require('express')();
const bodyParser = require('body-parser')
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
require('./config/mongo.config');
const booksRouter = require('./routes/booksRoutes'); 
app.use('/books',booksRouter)
app.listen(port,(error)=>{
   if(error){
       console.log(`Error while starting server on port ${port}`);
   }
   else{
       console.log('Magic moments started !!');
   }
});

module.exports = app;

