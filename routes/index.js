var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getComments', function(req, res, next) {
  var Comment=db.getDoc('comment');
  var fields={_id:0,__v:0};
  Comment.find({},fields,{},function(err,docs){
    if(err){
      console.error('error',err);
      res.json({flag:500});
    }
    else{
      res.json({flag:200,content:docs});
    }
  })


});
router.post('/commitComment', function(req, res, next) {
  var ui=req.body;

  var Comment=db.getDoc('comment');

  Comment.create(ui,function(err){
    if(err){res.json({flag:500,content:'error'});console.error('create commit error',err);return;}
    console.log('create commit ok');
    res.json({flag:200,content:'ok'});
  })

});
module.exports = router;
