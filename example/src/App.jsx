import React from "react";

import draggerWrapper from '../../dist/main.js';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="item no-select">请拖动</div>
    )
  }
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  dragStart = (props) => {
    console.log('drag start');
  }
  dragEnd = (props) => {
    console.log('drag end');
  }
  dragging = (props, rect) => {
    console.log(props, rect);
  }
  render() {
    var _p = this.props;
    var _s = this.state;

    const DragItem = draggerWrapper(Item);
    return (
      <div className="container">
        <h1 className="title">React Drag Component</h1>
        <DragItem dragStart={this.dragStart} dragging={this.dragging} dragEnd={this.dragEnd} />
      </div>
    )
  }
};

export default App;
