import React from "react";
import FormComp from "./FormComp";
import NavbarComp from "./NavbarComp";
import DescriptionComp from "./DescriptionComp";

const countOfSubscribers = 4000;

function App() {
  return (
    <div style={{textAlign:"center",paddingBottom:"3rem"}}>
      <img class="bg-img" src="https://www.shutterstock.com/image-photo/wide-variety-vegetarian-food-presented-260nw-698318131.jpg" alt="bg-img"/>
      <NavbarComp />
      <div class="shadow" style={{background:"white",display:"block",margin:"auto",width:"35rem"}}>
        <p style={{margin:"4rem"}}>Get a free subscription -- nearly {countOfSubscribers} subscribers across various countries enjoy it.</p>
        <FormComp />
        <DescriptionComp />
        <img src={require('../images/NewYorkTimes.svg.png')} alt="new york times" width={"300"} />
      </div>
    </div>
  );
}

export default App;
