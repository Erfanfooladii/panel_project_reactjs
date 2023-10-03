import React from "react";
import Main_Theme from "./assets/theme/theme";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Main_Theme/>    
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
