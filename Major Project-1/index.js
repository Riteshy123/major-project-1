const express=require('express');
const path=require('path');
const port=5000;
const app=express();
app.set('view engine','ejs') ;
app.set('views',path.join(__dirname,'view'));
const db=require('./config/mongoose');
app.use(express.urlencoded());
app.use(express.static('assets'));
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log("error");
    }
    else{
        console.log("my express server is running");
    }
});
