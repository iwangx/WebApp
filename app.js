var express=require("express");
var bodyParser = require('body-parser');
var path=require("path");
var routes = require('./routes/index');
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'html'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
routes(app);
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});