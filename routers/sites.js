const express= require('express')
const router=express.Router();
const nodemailer=require('nodemailer');
require('dotenv').config();

router.get('/',(req,res)=>{
   res.render('home');
    
})

router.get('/downloadFile',(req,res)=>{
   // res.redirect('/');
   res.download(process.env.DOWNLOADPATH);

   console.log('File downloaded');
   
});

const transport=nodemailer.createTransport(
   {
      secure:true,
      host:'smtp.gmail.com',
      // port:456,
      auth:{
         user: process.env.SENDEMAIL,
         pass: process.env.APPPASSWORD
      }
   }
);

function sendMail(to,sub,msg){
   transport.sendMail({
      to:to,
      subject:sub,
      text:msg
   });
}

router.post('/sendMail',async(req,res)=>{
   // console.log(req.body);

   const msg=`FullName:${req.body.name},
               Email: ${req.body.email},  
               Phone: ${req.body.phone},
              Description:${req.body.description}`;
   
 await sendMail(process.env.RECEIVEMAIL,'Client msg',msg);
   console.log('mail sent');
   res.status(200).redirect('/');
});

module.exports=router;