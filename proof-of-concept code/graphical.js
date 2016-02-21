// Replacing text with graphical display

var React = require('react');
var ReactDOM = require('react-dom');

// Component that displays an example ant image on the webpage
// Evidence for functional feasibility #1.
var GraphicalDisplay = React.createClass({
    render: function() {
        return <img src="http://previews.123rf.com/images/tigatelu/tigatelu1303/tigatelu130300120/18599365-Cute-ant-cartoon-waving-Stock-Vector-animal.jpg" alt="example ant image"/>
    }
})

// renders the image
 ReactDOM.render(<GraphicalDisplay/>, document.getElementById('content'));