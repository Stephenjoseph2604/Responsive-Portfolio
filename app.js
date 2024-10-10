// importing the requirements
const express=require('express');
const path=require('path');
const hbs=require('hbs');
const bodyparser=require('body-parser'); 




//config the dotenv file 
require('dotenv').config();

//getting the express object 
const app=express();

//to retrive the correct form of the data 
app.use(express.urlencoded({extended:false}));
// app.use(bodyparser.json()); 


//to set the static files
const location =path.join(__dirname,'./public');
app.use(express.static(location));
// set the view engine 
app.set('view engine','hbs');

//register the partials
// hbs.registerPartial(path.join(__dirname,'views','partials'));

//clear the cache for use the hbs partials 
app.set('view cache',false);

//set the route file to give the pages
// app.use('/',require('./routers/sites'));
const router=require('./routers/sites');
app.use('/',router);


//run the server 
const port =process.env.X_ZOHO_CATALYST_LISTEN_PORT || 4445;
app.listen(port,()=>{
    console.log(`server starts at the port ${port}`);
    
})