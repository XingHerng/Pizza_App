import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

function App() {
    return (
        <div className="container">
            <Header/>
            <Menu/>
            <Footer/>

        </div>
    );
}

const pizzaData = [
  {
    name: "Focaccia",
    description: "Bread with italian olive oil and rosemary",
    price: 6,
    picture: "/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    description: "Tomato and mozarella",
    price: 10,
    picture: "/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    description: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    picture: "/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    description: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    picture: "/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    description: "Tomato, mozarella, and pepperoni",
    price: 15,
    picture: "/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    description: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    picture: "/prosciutto.jpg",
    soldOut: false,
  },
];

function Menu(){
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;
    
  return (
     <div className="menu">
     <h2>Our Menu</h2>
     <h3>{isOpen ? "Authentic Italian Cuisine" : ""}</h3>

     <ul className="pizzas">
      {pizzaData.map( pizza => (
        <Pizza 
        name = {pizza.name} 
        description={pizza.description} 
        price={pizza.price} 
        picture={pizza.picture} 
        soldOut={pizza.soldOut}/>
      ))}
     </ul>

     </div>)

}



function Pizza({ picture, name, description, price, soldOut}) {
  return (
    <li className="pizza">
      <img src={picture} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>${price}</span>
          <h3>{soldOut === true? "Sold Out" : "Available"}</h3>

      </div>
    </li>
  );
}

function Header(){
    return <h1 style={{
        color:"orange",
        fontSize:"48px",
        textTransform: "uppercase"
    }}>Pizza Co</h1>
}


function Footer(){
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;
    
    if (isOpen){
        return(
        <div>
          <p>"We're currently open"</p>
          <button className="order-btn">Order Now</button>
        </div>
         )
    }else{
        return("Sorry we're closed")
    }


}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
