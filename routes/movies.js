var express=require('express');
var router=express.Router();
var movieModel=require('../model/movie');

/////////////////////////insert start///////////////////////////////////////////
var status='false';
router.post('/add/Title/:title/Year/:year/Rated/:rated/Response/:response',function(req,res){
  var movie = new movieModel({
    Title: req.params['title'],
    Year: req.params['year'],
    Rated: req.params['rated'],
    Response:req.params['response']
    });
  console.log('print');
  movie.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      status='true';
      console.log('meow');
      }
      });
      res.send(movie);
  //res.send('movies addeded successfully');
});

/////////////////////////insert end/////////////////////////////////////////////

///////////////////////insert usuing body///////////////////////////////////////
router.post('/insert',function(req,res){
console.log(req.body);

var movie=new movieModel({
    //movie.Title:req.body.Title,
    Title:req.body.Title,
    Year:req.body.Year,
    Rated:req.body.Rated,
    Released:req.body.Released,
     Runtime:req.body.Runtime,
     Genre:req.body.Genre,
     Director:req.body.Director,
     Writer:req.body.Writer,
     Actors:req.body.Actors,
     Plot:req.body.Plot,
     Language:req.body.Language,
     Country:req.body.Country,
     Awards:req.body.Awards,
     Images:req.body.Images,
     Metascore:req.body.Metascore,
     imdbRating:req.body.imdbRating,
     imdbVotes:req.body.imdbVotes,
     imdbID:req.body.imdbID,
     Type:req.body.Type,
    Response:req.body.Response
});
console.log(movie);
  movie.save(function(err){
    if(err){
      return console.log(err);
    }
    else{
      console.log('inserted');
    }
})
  res.send(movie);
  res.send('movies added successfully');
});



/////////////////////////////insert usuing body end/////////////////////////////
/////////////////////////////Delete By Id start/////////////////////////////////

router.delete('/delete/_id/:id',function(req,res){
  var id=req.params['id'];
  movieModel.findById(id,function(err,movie){
  return movie.remove(function(err){
    if(err){
      return err;
      console.log("not deleted");
    }else{
      console.log('removed');
      return res.send('');
    }
  });

});

  res.send('movies delete successfully');
});
/////////////////////////////Delete By Id End///////////////////////////////////
/////////////////////////////Find All start/////////////////////////////////////

router.get('/findAll',function(req,res){
  return movieModel.find(function (err, movie) {
    if (err) {
      return console.log(err);

    } else {
      return res.send(movie);
    }
  });
  res.send('movies found!!');
});
///////////////////////////Find All end/////////////////////////////////////////
//////////////////////////////////updated start/////////////////////////////////
router.put('/update/_id/:id',function(req,res){
  var id=req.params['id'];
return movieModel.findById(id, function(err,movie){

    movie.Title=req.body.Title;
    movie.Year=req.body.Year;
    movie.Rated=req.body.Rated;
    movie.Released=req.body.Released,
    movie.Runtime=req.body.Runtime,
    movie.Genre=req.body.Genre,
    movie.Director=req.body.Director,
    movie.Writer=req.body.Writer,
    movie.Actors=req.body.Actors,
    movie.Plot=req.body.Plot,
    movie.Language=req.body.Language,
    movie.Country=req.body.Country,
    movie.Awards=req.body.Awards,
    movie.Images=req.body.Images,
    movie.Metascore=req.body.Metascore,
    movie.imdbRating=req.body.imdbRating,
    movie.imdbVotes=req.body.imdbVotes,
    movie.imdbID=req.body.imdbID,
    movie.Type=req.body.Type,
    movie.Response=req.body.Response;

console.log(movie);
  movie.save(function(err){
    if(err){
      return console.log(err);
    }
    else{
      console.log('updated');
    }
    res.send(movie);
  })
});

res.send('movies updated successfully');
});

////////////////////////////////////////Updated end/////////////////////////////
//////////////////////Find By ID start//////////////////////////////////////////
router.get('/findbyId/_id/:id',function(req,res){

var id=req.params['id'];
return movieModel.findById(id,function(err,movie){
  if(err){
    console.log("Error ");
    return console.log(err);
  }else{
    console.log('success');
    return res.send(movie);
  }
});
  res.send('movie found');
});
/////////////////////////find by Id End/////////////////////////////////////////
module.exports=router;
