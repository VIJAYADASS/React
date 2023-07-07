import React from 'react';
import './App.css';
import NewComp from './components/NewComp';
//import Classprops from './Classprops';
//import Functionprops from './Functionprops';
//import FunctionComp from './components/FunctionComp';
//import { ClassComp, ClassComp1} from './components/ClassComp';
//import logo from './logo.svg';
 

const App = () => {
  const styles = {
    fontStyle: "Large",
    color: " darkblue",
  };

  return (
    <div className="App" style={styles}>
      <div className='.App' style={styles}></div>
      <h1>Welcome</h1>
       <NewComp />  
       
     
    </div>
  );
};

export default App;