var dispatcher = require('./../dispatcher.js');
var resthelper = require('./../helpers/Resthelper.js');

function GroceryItemStore() { 

    var items = [];

    resthelper.get('api/getItems').then(function(data) { 
        items = data;
        triggerListeners();
    });

    var listeners = [];

    function getItems() {
        return items;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function triggerListeners() { 
        listeners.forEach(function(listener) { 
            listener(items);
        })
    }

    function addGroceryItem(item) {
        items.push(item);
        triggerListeners();
    }

      function deleteGroceryItem(item) {
        
        var index;
        
        items.filter(function(_item, _index) { 
            if(_item.name === item.name) {
                index = _index;
                return;
            }
        });

        items.splice(index, 1);
        triggerListeners();
    }

     function setPurchaseStateGroceryItem(item) {
        
        var index;
        
        items.filter(function(_item, _index) { 
            if(_item.name === item.name) {
                index = _index;
                return;
            }
        });

        items[index].purchased = !items[index].purchased
        triggerListeners();
    }

    dispatcher.register(function(event) { 
        var split = event.type.split(':');
        if(split[0] === 'grocery-item') {
            switch(split[1]){
                case 'add':
                    addGroceryItem(event.payload); 
                break;
                 case 'delete':
                    deleteGroceryItem(event.payload); 
                break;
                case 'purchase' : 
                      setPurchaseStateGroceryItem(event.payload); 
                      break;
                
            }
        }
        else {

        }
    });

    return { 
        getItems: getItems,
        onChange: onChange
    };
}

module.exports = new GroceryItemStore();