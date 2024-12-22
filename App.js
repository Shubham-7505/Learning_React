import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id: "heading"}, 
  "Namaste React"
); // this is the core react, to simplify this more jsx was developed

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);