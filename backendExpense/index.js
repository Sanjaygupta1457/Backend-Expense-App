const express= require('express');
const app= express();
const User = require('./Model')
const cors= require('cors');
const ejs = require('ejs');
app.use(express.json());




   User.sync().then(()=>console.log('model created'))

   app.set('view engine','ejs');

   app.get('/',(req,res)=>{

      User.findAll().then((data) => {
         res.render('index', { user: data })
       }).catch(() => console.log('data not send to user page'))
     })
   
     
      
   
   app.get('/Addata',(req,res)=>{
      let Amt=req.query.Amt;
      let Des=req.query.Des;

    if(Amt && Des){ 
      let newExpense = {amt: Amt, des: Des};
      User.create({Amount:newExpense.amt,Description:newExpense.des }).then(()=>res.redirect('/')).catch(()=>console.log('data not stored'))
      
      
       }
      
   else{
      
      res.redirect('/')
      

   }
   
   })

   app.delete('/Delete', (req, res) => {
  let ID = req.query.id; 
  User.destroy({
    where: {
      id: ID, 
    }
  }).then(() =>res.redirect('/')).catch(()=>console.log('data not deleted!')); 
    });
  

   app.listen(3000)