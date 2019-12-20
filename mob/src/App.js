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
          backgroundColor: this.state.backgroundColor,
          width:'100vw',
          height:'100vh',
          
        }}
      >
        <Row type="flex"  align='middle' style={{position: "absolute", top: "50%", left: "40%"}}>
          <Col >
            <Button onClick = {this.handleClick('blue')} style={{marginRight: "10px "}}>BLUE</Button>
          </Col>
          <Col>
            <Button onClick = {this.handleClick('red')} style={{marginRight: "10px  "}}>RED</Button>
          </Col>
          <Col>
            <Button onClick = {this.handleClick('yellow')} style={{marginRight: "10px "}}>YELLOW</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
