import React from "react";
import SignUp from "./SignUpForm";
import "./css/topBar.css";

function TopBar({ setContentText }) {
  const handleButtonClick = () => {
    // Change the content when the button is clicked 
    const signUpContent = SignUp();
    setContentText(signUpContent);
  };

  return (
    <div className="topBar">

        <div className="pageLogo">
        <a href="App.js" id="LogoAnchorHome">  
          <img src="./Logo.png" alt="Urban Utopia">
          </img>
        </a>
        </div>

        <div className="filterForm"> {/*This may not even be implemented. Well see*/}
          <form id="ApiFilterSearch">
          <label for="filter">Filter  </label>
          <input type="text" name="filter" id="filter"></input>
          
          </form>
        </div>
        
      <button className="signUpBtn" onClick={handleButtonClick}>Sign up</button>
    </div>
  );
}

export default TopBar;