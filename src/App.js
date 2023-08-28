import "./styles.css";
import React from "react";
import SigninPage from "./Components/SigninPage";
import bgimage from "./Components/bg-1.png";

function App() {
  const backgroundStyles = {
    backgroundImage: `url(${bgimage})`
  };

  return (
    <div className="App" style={backgroundStyles}>
      <SigninPage />
    </div>
  );
}

export default App;
