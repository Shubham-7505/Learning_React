import React from "react"
import ReactDOM from "react-dom/client"
import logo from './logo.png';
import food from './food.png';

/**
 * Layout---------
 * Header
 *   logo
 *   home, about us, contact us, cart
 * Body
 *   Search
 *   Restaurent Container
 *      Restaurent card
 *        img
 *        name, star rating, delivery time
 * 
 * 
 * Footer
 * 
 */
const Header = () =>{
  return (
    <div className="header">
       <div className="logo-container">
          <img className="logo"
             src={logo} alt="SnackSprint Logo"
          />
       </div>
       <div className="navitems">

         <ul>
          <li>Home</li>
          <li>about</li>
          <li>contact us</li>
          <li>cart</li>
         </ul>

       </div>
    </div>
  );
}

const RestaurentCard = ()=>{
  return (
    <div className="res-card">
      <img className= "card-img" src = {food}/>
      <h3>Your Food</h3>
      <div >
        <h4>Burger</h4>
        <h4>4.5 stars</h4>
        <h4>35 minutes</h4>
      </div>
      
    </div>
  );
}
const Body = () =>{
   return (
    <div className="body">
       <div className="search">
           Search
       </div>
       <div className="res-container">
          <RestaurentCard/>
          <RestaurentCard/>
          <RestaurentCard/>
          <RestaurentCard/>
          <RestaurentCard/>
          <RestaurentCard/>
          <RestaurentCard/>
          <RestaurentCard/>
          <RestaurentCard/>
          <RestaurentCard/>
       </div>
    </div>
   )
}
const AppLayout = () =>{
 return (
 <div className="app">
   <Header/>
   <Body/>
 </div>
 );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);