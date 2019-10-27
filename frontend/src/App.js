import React from "react";
import { connect } from "react-redux";
import "./App.css";

function App() {
  return <div className="App"></div>;
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

export default connect(mapStateToProps)(App);
