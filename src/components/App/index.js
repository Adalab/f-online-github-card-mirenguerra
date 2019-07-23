import React from "react";
import "./styles.scss";
import InputFilter from "../InputFilter";
import getDataList from "../../services/getAdalabersDataList";
import getAdalaberData from "../../services/getAdalaberData";

const adalabersData = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adalabersList: [],
      selectedAdalaber: "",
    };
    this.handleSelect = this.handleSelect.bind(this);
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

  fetchAdalaberData(url) {
    getAdalaberData(url).then(data => {
      adalabersData
        .push(data)
        .sort((a, b) =>
          a.login.toLowerCase() > b.login.toLowerCase()
            ? 1
            : b.login.toLowerCase() > a.login.toLowerCase()
            ? -1
            : 0
        );
      this.setState({ adalabersList: [...adalabersData] });
    });
  }

  handleSelect(event) {
    this.setState({ selectedAdalaber: event.target.value });
  }

  render() {
    const { adalabersList } = this.state;
    return (
      <div className="App">
        <InputFilter
          adalabersList={adalabersList}
          handleSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default App;
