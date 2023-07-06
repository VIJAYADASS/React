import React, { useState } from "react";
import BellAImage from "./BellA-PNG.png";
import BellBImage  from "./BellB.png";
 

const NewComp = () => {
    const [message, setMessage] = useState("Subscribe to react-Myapp");
    const [sub, setSub] = useState("Subscribe");
    const [imageURL, setImageURL] = useState(BellAImage);
    
    
    const styles = {
      fontStyle: "bold",
      color: " rgb(22 101 52)",
    };
  
    const buttonChange = () => {
      setMessage("Click the Bell icon and get the Notification");
      setSub ("Subscribed") ;
     
    };

    const imageChange = () =>{
        setImageURL(BellBImage);
        setMessage("Thank you! You will receive updates for all new videos and live streams.");
    };

    return (
      <div className="App">
        <h2 style={styles}>{message}</h2>
       <b><button onClick={buttonChange}>{sub}</button></b> 
        <p>
        <img className="bell-icon" src={imageURL} onClick={imageChange}  alt="" />
        </p>
         
      </div>
    );
};

export default NewComp;