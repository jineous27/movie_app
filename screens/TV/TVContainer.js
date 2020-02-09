import React, { Component } from 'react';
import { Text, View } from "react-native";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../src/api";

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
            ({ data: { results: popular}} = await tvApi.popular());
            ({ data: { results: topRated}} = await tvApi.topRated());
            ({ data: { results: airingToday}} = await tvApi.airingToday());
            // const popular = await tvApi.popular();
            // const topRated = await tvApi.topRated();
            // const airingToday = await tvApi.airingToday();

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