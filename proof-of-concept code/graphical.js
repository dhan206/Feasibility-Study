// Replacing text with graphical display

var React = require('react');
var ReactDOM = require('react-dom');

//Example code to support Functional Feasibility #1 Graphical Interface

var DisplayItem = React.createClass({
  render: function() {
    return <img src={this.props.image} alt="example ant"/>
  }
});

var DisplayList = React.createClass({
  render: function() {
    var imageItems = this.props.images.map(function(value) {
        return <DisplayItem image={value} />
    })
    return (
      <div>{imageItems}</div>
    );
  }
});

var imagesList = [
    "https://www.colourbox.com/preview/5554712-red-ant-cartoon.jpg", "https://www.colourbox.com/preview/8483789-team-of-ants-cartoon-carries-log.jpg", "http://www.how-to-draw-funny-cartoons.com/image-files/cartoon-ant-8.gif"
]

// renders the image
 ReactDOM.render(<DisplayList images={imagesList}/>, document.getElementById('content'));