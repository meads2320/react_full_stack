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
            res.send(items);
        });
   }