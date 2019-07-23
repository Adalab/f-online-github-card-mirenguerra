import React from "react";
import "./styles.scss";
import InputFilter from "../InputFilter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <InputFilter />
      </div>
    );
  }
}

export default App;
