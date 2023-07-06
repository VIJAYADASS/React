import React, {component} from "react";

export class click extends  component{
    constructor(props){
        super(props)

        this.state = {
            count: 0
        };
    }
    Updateclick = () => {
        this.setState({count : this.state.count +1});
    };
    render(){
        const { count } = this.state;      
          return(
            <div>
                  <button onclick={this.updateclick}>Click {count} times</button>
            </div>
        );
    }
}

export default click;