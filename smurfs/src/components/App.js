import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchSmurfs } from "../actions/smurfActions";
import SmurfContainer from "../components/SmurfContainer";
import SmurfForm from "../components/SmurfForm";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h2>Smurf Village</h2>
        <div className="ui center aligned basic segment">
          <SmurfForm />
        </div>
        <div className="ui horizontal divider">Smurfs</div>
        <div className="ui center aligned basic segment">
          <SmurfContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
