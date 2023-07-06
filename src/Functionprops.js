import React from "react";

function Functionprops(props) {
    return(
        <div>
            <p>This is a functional components</p>,
            <h2>Welcome! {props.name} to from {props.place} sample app</h2>
        </div>
    )
}

export default Functionprops;