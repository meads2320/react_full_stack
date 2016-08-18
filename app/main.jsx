
var React = require('react/addons');


console.log("Hello from JSX!");

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [
        { name: "Ice Cream" },
        { name: "Water" },
        { name: "Chips", purchased: true },
        { name: "Soda" },
        { name: "Waffles" },
        { name: "Wine" }
];

React.render(<GroceryItemList items={initial} />, app)