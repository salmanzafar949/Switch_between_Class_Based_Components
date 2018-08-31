import React, {Component} from 'react';
import MsgComp from './MsgComp';

class BtnComp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: true
        }
    }

    BtnHanlder = () => {

        this.setState({
            value: !this.state.value
        })
    }

    render(){
        return <div>
        <button onClick={this.BtnHanlder}>
            Change the Location
        </button>
            <MsgComp value={this.state.value}/>
        </div>
    }

}

export default BtnComp