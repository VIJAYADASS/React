import React, { Component }from "react";

class Classprops extends React.Component {
    render() {
        return (
            <div>
                <h2>Hey! {this.props.name} from {this.props. place} . This is called sample app</h2>
                 
            </div>
        )
    };
}
export default Classprops;