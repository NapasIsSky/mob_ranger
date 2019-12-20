import React from 'react';
import logo from './logo.svg';
import './App.css';
import  'antd/dist/antd.css'
import {Row , Col, Button} from 'antd'
function App() {
  return (
    <div style={{position:"absolute", left: '50%', top:'50%',}}>
      <Row type='flex' justify='center' >
        <Col><Button>BLUE</Button></Col>  
        <Col><Button>RED</Button></Col>  
        <Col><Button>YELLOW</Button></Col>  
      </Row>
    </div>
  );
}

export default App;
