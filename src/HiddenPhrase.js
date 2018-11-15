import React, {Component} from 'react';

import "./HiddenPhrase.css";

class HiddenPhrase extends Component{

    render(){
        return (
            <div className="hiddenPhrase">
                {this.props.hiddenPhrase}
            </div>
        );
    }
}

export default HiddenPhrase;