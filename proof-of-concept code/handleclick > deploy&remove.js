var React = require('react');
var ReactDOM = require('react-dom');

class GameModel {
    constructor() {
        this._deploy = false;
        this._remove = false;
    }
    
    get deploy() {
        return this._deploy;
    }
    
    get remove() {
        return this._remove;
    }
    
    set deploy(input) {
        this._deploy = input;
    }
    
    antRemoval() {
        this._remove = true;
    }
    
    removeAnt(input) {
        //code to remove ant
    }
}

var Deploy = React.createClass({
    handleClick: function(){
        
    }
})

class GameController {
    constructor(model, view){ 
        this._model = model;
        this._view = view;
    }
    
    setRemove() {
        this._model.antRemove();
    }
    
    setDeploy() {
        this._model.deploy = true;
    }
    
    deployAnt(input) {
        this._model.deploy(input);
        this.update();
    }
    
    removeAnt(input) {
        if(this._model.remove) {
            this._model.removeAnt(input);
        }
        this.update();
    }
    
    update() {
        var View = this._view;
        ReactDOM.render(<View />, document.getElementById('content'));
    }
}

var Deploy = React.createClass({
    handleClick: function() {
        GameController.setDeploy();
    },
    
    render: function() {
        return <button onclick={this.handleClick}><img src="https://www.colourbox.com/preview/5554712-red-ant-cartoon.jpg"/></button>
    }
})

var Remove = React.createClass({
    handleClick: function() {
        GameController.setRemove();
    },
    
    render: function() {
        return <button onclick={this.handleClick}>ANT REMOVAL TOOL</button>
    }
})

var GraphicalInterface = React.createClass({
  render: function() {
    return (
      <Deploy />
      <Remove />
    );
  }
});