module.exports = function(app) {
       
       var items = [
        { name: "Ice Cream" },
        { name: "Water" },
        { name: "Chips", purchased: true },
        { name: "Soda" },
        { name: "Waffles" },
        { name: "Wine" }
    ];

    app.route('/api/getItems')
        .get(function(req,res) { 
            res.send(items)
        })


    app.route('/api/addItem')
        .post(function(req,res) { 
            var item = req.body;
            items.push(item);
            res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ status: 'OK' }));
            res.end();
        });

    app.route('/api/updateItem')
        .post(function(req,res) { 
            var item = req.body;
            var index;

            items.filter(function(_item, _index) { 
                if(_item.name === item.name) {
                    index = _index;
                    return;
                }
            });

            items[index] = item;

             res.writeHead(200, { 'Content-Type': 'application/json' });
                 res.write(JSON.stringify({ status: 'OK' }));
            res.end();
        });

    app.route('/api/deleteItem')
        .post(function(req,res) { 
            var item = req.body;
            var index;
        
            items.filter(function(_item, _index) { 
                if(_item.name === item.name) {
                    index = _index;
                    return;
                }
            });

             res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ status: 'OK' }));
            res.end();

            items.splice(index, 1);
        });

   }