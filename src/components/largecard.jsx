import React, { Component } from 'react';
import Square from "../components/bingosquare"
import Card from 'react-bootstrap/Card';


import "../App.css";
    

class Hold extends Component{
    render(){
        const topics = ["Can we all turn on our cameras","Can you hear me?","Random Pet Shows Up","Can you see my screen?","Just one Moment","Forgot to Mute",
        "Forgetting to share screen","Hi __ can you mute","Hi __ you are muted","Can we circle back","Lets take this offline","Hi guys I have another call",
        "It's still loading", "Business as usual", "Im sorry you cut out", "Next slide please", "I think its your connection","Multiple people talk at once",
        "A question is asked with no response","Spouse appears during the meeting","You're Frozen","No updates from me","Mic feedback",
        "Slack/teams message ping"]
        const shuffleArray = topics =>{
            for(let i = topics.length - 1;i>0; i--){
                const j = Math.floor(Math.random()*(i+1));
                const temp = topics[i];
                topics[i] = topics[j];
                topics[j] = temp;
            }
        }
        shuffleArray(topics)

        return(
            <Card bg ="secondary" border = "secondary" className ="center" style={{ width: "35rem", height:"40.2rem", marginLeft:665 , marginTop: 60}}>
                <div class="row">
                    <div class="row"></div>
                    <div class="col-md-1"></div>
                    <div class="col-2">
                        <Square number ={topics[0]}/>
                        <Square number ={topics[1]}/>
                        <Square number ={topics[2]}/>
                        <Square number ={topics[3]}/>
                        <Square number ={topics[4]}/>
                        
                    </div>
                    <div class="col-2">
                        <Square number ={topics[5]}/>
                        <Square number ={topics[6]}/>
                        <Square number ={topics[7]}/>
                        <Square number ={topics[8]}/>
                        <Square number ={topics[9]}/>
                        
                    </div>
                    <div class="col-2">
                        <Square number ={topics[10]}/>
                        <Square number ={topics[11]}/>
                        <Square number ="Free Space Click me"/>
                        <Square number ={topics[12]}/>
                        <Square number ={topics[13]}/>
                        
                    </div>
                    <div class="col-2">
                        <Square number ={topics[14]}/>
                        <Square number ={topics[15]}/>
                        <Square number ={topics[16]}/>
                        <Square number ={topics[17]}/>
                        <Square number ={topics[18]}/>
                        
                    </div>
                    <div class="col-2">
                        <Square number ={topics[19]}/>
                        <Square number ={topics[20]}/>
                        <Square number ={topics[21]}/>
                        <Square number ={topics[22]}/>
                        <Square number ={topics[23]}/>
                        
                    </div>
                </div>
                    
            </Card>
           
        )
    }
}

export default Hold;