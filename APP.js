import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
var htmlRoot=document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);
function APP(){
    return(
        <div>
            <h1>welcome to react</h1>
            <Header />
            <Footer />
        </div>
    )
        

}
rootReact.render(<APP/>)
