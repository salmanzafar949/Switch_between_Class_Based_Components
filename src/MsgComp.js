import React, {Component} from 'react';
import Msg1Comp from './Msg1Comp';

class MsgComp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: "heyyy"
        }
    }

    render(){

        if (this.props.value)
        {
            return <h1>
                {this.state.data}
            </h1>
        }

        return <Msg1Comp/>
    }

}

export default MsgComp