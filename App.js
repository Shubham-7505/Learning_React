import React from "react"
import ReactDOM from "react-dom/client"
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello, My name is Shubham Kumar."
// );

//React.createElement is used to create the react elements which 
// will create a javascript object.
// render method will convert this object into HTML tags.
const parent = React.createElement("div",
  {id:"parent"}, 
  [React.createElement("div", {id:"child1"},
    [React.createElement("h1", {}, "I am h1 tag form child 1"),
     React.createElement("h2", {}, "I am h2 tag form child 1")
    ]
  ),                
  React.createElement("div", {id:"child2"},
    [React.createElement("h1", {}, "I am h1 tag form child 2"),
     React.createElement("h2", {}, "I am h2 tag form child 2")
    ]
  )
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);