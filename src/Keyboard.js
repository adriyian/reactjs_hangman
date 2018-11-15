import React, {Component} from 'react';
import KeyEntry from './KeyEntry';

import "./Keyboard.css";

const KEYBOARD_KEYS = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

class Keyboard extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="keyboard">
                {
                    !this.props.finish ? 
                                        KEYBOARD_KEYS.map((key, index) => (
                                            <KeyEntry 
                                                index={index}
                                                value={key}
                                                key={index}
                                                used={this.props.selected.includes(key)}
                                                onClick={this.notifyClickEvent}
                                            />
                                        ))
                                        : 
                                        <KeyEntry 
                                            index={100}
                                            value="New game"
                                            key={100}
                                            used={false}
                                            onClick={this.notifyClickEvent}
                                        />
                }
            </div>
        );
    }

    notifyClickEvent = (value, used) => {
        if(!used){
            console.log("Keyboard Click ", KEYBOARD_KEYS[value])       
            this.props.checkClickEvent(KEYBOARD_KEYS[value]);     
        }
    }
}

export default Keyboard;