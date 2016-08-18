var GroceryItem = require('./../models/GroceryItem');

module.exports = function(app) {

    app.route('/api/getItems')
        .get(function(req,res) { 
            GroceryItem.find(function(error,doc) { 
                 res.send(doc)
            });
           
        });

    app.route('/api/addItem')
        .post(function(req,res) { 
            var item = req.body;
            var groceryItem = new GroceryItem(item);
        
            groceryItem.save(function(error,doc) { 

                res.status(200).send(doc);
            });

         
        });

    app.route('/api/updateItem')
        .post(function(req,res) { 

            GroceryItem.findOne({ 
                _id: req.body._id
            }, function(error, doc) { 
                for (var key in req.body) {
                    doc[key] = req.body[key];
                }
                doc.save()
                res.status(200).send();
            });
        });

    app.route('/api/deleteItem/:id')
        .delete(function(req,res) { 
            GroceryItem.findOne({ 
                _id: req.params.id
            }).remove(function(x) { 
                console.log("removed", x);
            });

        });

   }