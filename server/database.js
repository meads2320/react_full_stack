var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem');

mongoose.connect('mongodb://localhost/grocery', function() { 
    console.log("Mongo Connected");

    //mongoose.connection.db.dropDatabase();

    //   var items = [
    //     { name: "Ice Cream" },
    //     { name: "Water" },
    //     { name: "Chips", purchased: true },
    //     { name: "Soda" },
    //     { name: "Waffles" },
    //     { name: "Wine" }
    // ];

    // for(var i = 0; i < items.length; i++){
    //     new GroceryItem(items[i]).save();
    // }

});



