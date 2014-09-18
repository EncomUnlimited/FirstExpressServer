var express = require('express');
// Express Framework
var app = express();
//Create Express Instance
var swig = require('swig');
//Swig Template engine
var morgan = require('morgan');
//Logger
app.use('/static', express.static(__dirname + '/public'));
//Ststic directory
app.engine('html', swig.renderFile);
//Function renderTemplate
app.set('view engine', 'html');
//Template directory 
app.set('views', __dirname + '/views');
//Desactivate cache
app.set('view cache', false);
//Desactivate cache swig
swig.setDefaults({ cache: false })
//Logger format implementation
app.use(morgan('combined'))
//Site root url controller
app.get('/', function(req, res){
	res.render('index');
});
//Listen server in port 8080
app.listen(8080, function(){
	console.log("I'm listening for you master");
});
