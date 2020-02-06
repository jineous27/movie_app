import React, { Component } from 'react';
import { Text, View } from "react-native";
import MoviesPresenter from "./MoviesPresenter";

class MoviesContainer extends Component {
  state = {
    loading: true
  };

  render() {
    const { loading } = this.state;
    return <MoviesPresenter loading={loading} />;
  }
}

export default MoviesContainer;