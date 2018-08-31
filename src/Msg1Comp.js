import React, {Component} from 'react';

class Msg1Comp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: "byyeee"
        }
    }

    render(){

        return <h1>
            {this.state.data}
        </h1>
    }

}

export default Msg1Comp
