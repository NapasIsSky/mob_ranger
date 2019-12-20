import "./App.css";
import "antd/dist/antd.css";
import { Row, Col, Button } from "antd";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "green"
    };
  }

handleClick=(backgroundColor)=>()=>{
 
  this.setState({
    backgroundColor : backgroundColor
  })
}

  render() {
    return (
      <div
        style={{
          position: "absolute",
          backgroundColor: this.state.backgroundColor,
          width:'100vw',
          height:'100vh'
        }}
      >
        <Row type="flex" justify="center" align='middle'>
          <Col >
            <Button onClick = {this.handleClick('blue')}>BLUE</Button>
          </Col>
          <Col>
            <Button>RED</Button>
          </Col>
          <Col>
            <Button>YELLOW</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
