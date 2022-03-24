import React, { Component} from 'react';
import "../App.css";

class Square extends Component{ 
    state = {
        button: {color:"blue", clicked: false}
    };
    constructor(props){
        super(props);
        this.handleClick= this.handleClick.bind(this);
        this.state={clicked: false, color:"blue"}
    }
    handleClick(){
        if(this.state.clicked === false){
            this.setState({color:"red",clicked:true})
        } else{
            this.setState({color:"blue",clicked:false})
        }
    }


    render(){  
    return(
<button type="button" className="button" style={{background :this.state.color}} onClick={this.handleClick}>{this.props.number}</button>
    )
}

}

export default Square;


