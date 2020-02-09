import React, { Component } from 'react';
import { Text, View } from "react-native";
import TVPresenter from "./TVPresenter";
import { moviesApi } from '../../src/api';

class TVContainer extends Component {
    state = {
        loading: true,
        error: null,
        popular: null,
        topRated: null,
        airingToday: null
    };
    async componentDidMount() {
        try {
            const popular = await moviesApi.popular();
            const topRated = await moviesApi.topRated();
            const airingToday = await moviesApi.airingToday();

            this.setState({
                popular: popular,
                topRated: topRated,
                airingToday: airingToday
            })
        } catch {
            this.setState({ error: "Can't get TV Data"});
        } finally {
            this.setState({ loading: false});
        }
    }

    render () {
        const { loading, popular, topRated, airingToday } = this.state;
        console.log("topRated is ", topRated)
        return <TVPresenter loading={loading} />;
    }
}

export default TVContainer;