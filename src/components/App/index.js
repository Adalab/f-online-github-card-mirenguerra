import React from "react";
import "./styles.scss";
import InputFilter from "../InputFilter";
import getDataList from "../../services/getAdalabersDataList";
import getAdalaberData from "../../services/getAdalaberData";
import UserCard from "../UserCard";

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
    getDataList()
      .then(users => {
        if (users) {
          users.map(user => {
            return this.fetchAdalaberData(user.url);
          });
        } else {
          console.log("Error");
        }
      })
      .catch(function() {
        alert("No se ha podido conectar. Inténtalo de nuevo");
      });
  }

  fetchAdalaberData(url) {
    getAdalaberData(url)
      .then(data => {
        if (data) {
          adalabersData.push(data);

          this.setState({ adalabersList: [...adalabersData] });
          this.saveAdalabersLS(adalabersData);
        } else {
          console.log("Error");
        }
      })
      .catch(function() {
        alert("No se ha podido conectar. Inténtalo de nuevo");
      });
  }

  saveAdalabersLS(users) {
    localStorage.setItem("adalabersList", JSON.stringify(users));
  }

  handleSelect(event) {
    this.setState({ selectedAdalaber: event.target.value });
  }

  render() {
    const { adalabersList, selectedAdalaber } = this.state;
    return (
      <section className="App">
        <InputFilter
          adalabersList={adalabersList}
          handleSelect={this.handleSelect}
        />
        <i class="fab fa-github-alt App__Github"></i>
        {/* <UserCard
          adalabersList={adalabersList}
          selectedAdalaber={selectedAdalaber}
        /> */}
      </section>
    );
  }
}

export default App;
