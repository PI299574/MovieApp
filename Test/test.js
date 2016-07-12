var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  //res.json({meassage:'Welcome to our Api'});
  res.json('{key:Welcome here!!}');
});


module.exports=router;
