var express=require('express');
var router=express.Router();
//////////////////////////////////////Db connect///////////

////////////////////////////schema for check connection///////////////
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test1');

 var Cat = mongoose.model('Cat', { name: String });

 var kitty = new Cat({ name: 'Zild' });
 kitty.save(function (err) {
   if (err) {
     console.log(err);
   } else {
     console.log('meow');
   }
 });
////////////////////////schema for movie data/////////////////////////
var Schema=mongoose.Schema;

// var Images = new Schema({
//     tag: String,
//     url: String
// });
var movieSchema = new Schema({
  Title: String,
  Year:String,
  Rated:String,
  Released:String,
  Runtime:String,
  Genre:String,
  Director:String,
  Writer:String,
  Actors:String,
  Plot:String,
  Language:String,
  Country:String,
  Awards:String,
  Images:String,
  Metascore:String,
  imdbRating:String,
  imdbVotes:String,
  imdbID:String,
  Type:String,
  Response:String

});
var movieModel= mongoose.model('movieModel',movieSchema);
module.exports = movieModel;
