var Display = React.createClass({
  render: function() {
    return(
      <div>
        <p>{this.props.color}</p>
        <p>{this.props.num}</p>
        <p>{this.props.size}</p>
      </div>
    );
  }
});

var Label = React.createClass({
  render: function() {
    return (
      <Display
        color={this.props.color}
        num={this.props.num}
        size={this.props.size}
      />
    );
  }
});

var Shirt = React.createClass({
render: function() {
    return (
      <div>
        <Label color={this.props.color}
               num={this.props.num}
               size={this.props.size}/>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <Shirt color="steelblue" num="3.14" size="medium"/>
  </div>,
  document.querySelector("#container")
);
