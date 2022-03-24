import React, { Component} from 'react';
import "../App.css";

class Rectangle extends Component{ 
    constructor(props){
        super(props);
        this.handleClick= this.handleClick.bind(this);
        this.state={color:"lightblue"}
    }
    handleClick(){
        if(this.state.clicked === false){
            this.setState({color:"lightgreen",clicked:true})
        } else{
            this.setState({color:"lightblue",clicked:false})
        }
    }
        render(){    
        return(
    <button type="button" className={this.props.class} style={{background :this.state.color}} onClick={this.handleClick}>{this.props.number}</button>
        )
    }
    
    }
    
    export default Rectangle;

    //change onclick to just change topics instead of button color