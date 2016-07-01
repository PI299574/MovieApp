var express=require('express');
var router=express.Router();
//////////////////////////////////////Db connect///////////


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test1');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});


/////////////////////////////db connect//////////////////////////


router.post('/add',function(req,res){
  res.send('movies addeded successfully');
});


router.delete('/delete',function(req,res){
  res.send('movies delete successfully');
});



router.get('/find',function(req,res){
  res.send('movies found!!');
});


router.put('/update',function(req,res){
  res.send('movies addeded successfully');
});

module.exports=router;
