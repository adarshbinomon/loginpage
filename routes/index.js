var express = require('express');
var router = express.Router();

const userdata = 
{ email: 'admin@gmail.com' ,
  password : '1234'}

/* GET home page. */
router.get('/', function(req, res) {
  if(req.session.isLoggedin)
    res.render('index', { title: 'login' }); 
  else 
    res.redirect('/login')
});
router.get('/login', function(req, res) {
  if(req.session.isLoggedin){
    res.redirect('/')
  }else{
    res.render('login')
  }
});

router.post ('/login', function(req,res){
  console.log(req.body)
  if(req.body.email == userdata.email && req.body.password == userdata.password){
    req.session.isLoggedin = true
    res.redirect('/')
  }else{
    res.redirect('/login')
  }
} );

router.get('/logout',(req,res) => {
  req.session.destroy()
  res.redirect('/login')
})
module.exports = router; 

