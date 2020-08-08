import React from 'react';
import Search from "./Components/Search";
const THEME_COLOR = "#003049";
const THEME_SECONDARY = "#f77f00";
const FONT_COLOR = "#FFF"

class App extends React.Component {
  render() {
    return (
      <div>
        <center>
          <h1 style={{ color: THEME_SECONDARY }}>Gamers Arena</h1>
          <div style={{ width: "100%" }}>
            <Search />
          </div>
        </center>

      </div>
    );
  }
}

export default App;
