import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Landing extends React.Component{
  render(){
    return(
      <div className="Landing">
        <p>Hello</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Landing />, rootElement);
