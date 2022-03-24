import React, { Component } from 'react';
import Hold from "./largecard"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Rectangle from "./changetopicbutton"


class Page extends Component{
    constructor(props){
        super(props);
        this.state={color:"lightblue"}

    }
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col>
                <h1 className="center">Bingo</h1>
                </Col>
                </Row>
                <Row>
                <Col>
            <Hold/>
            </Col>
            <Col>
            <Rectangle class = "topicButton" number ="Topic 1"/>
            <Rectangle class = "topicButton2" number ="Topic 2"/>
            <Rectangle class = "topicButton2" number ="Topic 3"/>
            </Col>
            </Row>
            </Container>
        )
    }
}
export default Page;