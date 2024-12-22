import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id: "heading"}, 
  "Namaste React"
); // this is the core react, to simplify this more jsx was developed
//this is not user(developer) friendly code or syntex because this is complex, not readable
// To simplify this JSX comes into picture 
const Jsxheading = ()=> (<h1 >Namaste React using JSX</h1>);

// React components
// 1. Class based components  - old
// 2. functional Components  - new

//Functional Components :
// it uses javascripts to create components
// a function that returns JSX code

// const HeadingComponent = () =>{
//   return <h1>Namaste React functional Component</h1>;
// };
const name = "Shubham Kumar";
const HeadingComponent = () =>(
 
  <div id= "heading">
   <Jsxheading/>
   {Jsxheading()}
   <Jsxheading></Jsxheading>
   {/* all these three works same
   <Jsxheading/>
   {Jsxheading()}
   <Jsxheading></Jsxheading>
   */}
   
   <h2>{1000+500/2}</h2>
   <h2>Hello {name}!</h2>
   <h1 >Namaste React functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);