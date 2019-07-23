import React from "react";
import "./styles.scss";
import InputFilter from "../InputFilter";
import getDataList from '../../services/getAdalabersDataList';
import getAdalaberData from "../../services/getAdalaberData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adalabersList: [],
      selectedAdalaber: "",
    };
  }

  componentDidMount() {
    if (this.state.adalabersList.length === 0) {
      this.fetchAdalabersList();
    }
  }

  fetchAdalabersList() {
    getDataList().then(users => {
      users.map(user => {                
        return this.fetchAdalaberData(user.url);
      });
    });
  }

  fetchAdalaberData(url){
    console.log(url);
    getAdalaberData(url).then(userData=>{
      console.log(userData);
    })
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
