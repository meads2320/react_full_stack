var React = require('react/addons');
var action = require('./../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({
    delete: function(e) { 
        e.preventDefault();
        action.delete(this.props.item);
    },
    render:function(){
        return (

            <li className={this.props.item.purchased ? "strikethrough" : null}>
                <div>{this.props.item.name}</div>
                <form className="three columns" onSubmit={this.delete}>
                    <button>&times;</button>
                </form>
            </li>
        )
    }
})