var React = require('react/addons');
var action = require('./../actions/GroceryItemActionCreator.jsx');

module.exports = React.createClass({
    delete: function(e) { 
        e.preventDefault();
        action.delete(this.props.item);
    },
    purchase: function(e) { 
        e.preventDefault();
        action.purchase(this.props.item);
    },
    render:function(){
        return (

            <div className="grocery-item row">
                <div className="six columns">
                    <h5 className={this.props.item.purchased ? "strikethrough" : null}>{this.props.item.name}</h5>
                </div>
                <form className="three columns" onSubmit={this.delete}>
                    <button className="button-danger">&times;</button>
                </form>
                <form className="three columns" onSubmit={this.purchase}>
                    <button className={this.props.item.purchased ? "button-warning" : "button-primary"}>
                    {this.props.item.purchased ? "Return Item" : "Purchase Item"}</button>
                </form>
            </div>
            
        )
    }
})