import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
            <Header/>

            <Pizza picture ='/focaccia.jpg' name="focaccia" description= "tomato, mozerella, spinach and ricotta cheese" price = "5"/>
            <Pizza picture ='/funghi.jpg' name="funghi" description='tomato, mozerella and spinach ' price = "10"/>

        </div>
    );
}

function Header(){
    return <h1>Pizza Co</h1>
}

function Pizza({picture,name,description,price}){
    return (
        <div>
            <img src={picture} width="200" height="200"></img>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>${price}</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);