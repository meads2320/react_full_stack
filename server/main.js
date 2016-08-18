var express = require('express');
var parser = require('body-parser');
var React = require('react/addons');
var GroceryItem = require('./models/GroceryItem');

var app = new express();

require('babel/register');
require('./database.js');

app.get('/',function(req,res){
    //res.render('./../app/index.ejs',{});
    var _app = React.createFactory(require('./../app/components/GroceryItemList.jsx'));

    GroceryItem.find(function(error, doc) { 
        var generated = React
        .renderToString(
            _app({
                items :doc
            }));

        res.render('./../app/index.ejs', { reactOutput: generated});
    });
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));



require('./routes/items.js')(app);
