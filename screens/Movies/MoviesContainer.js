import React, { Component } from 'react';
import { Text, View } from "react-native";
import MoviesPresenter from "./MoviesPresenter";
import { moviesApi, tvApi } from "../../src/api";

class MoviesContainer extends Component {
  state = {
    loading: true, //상태값을 더 추가할 거,, 여기는 데이터를 담는 그릇이다. 여기는 초기값,, componentdidmount 거치기 전에//
    upcoming: null,
    popular: null,
    nowPlaying: null,
    error: null
  };
//무조건물러오는걸 먼저 써준다, catch/finally가 형식이다. 처음에 이 뷰가 실행되면 네트워크에 태워서 각각의 api들을 받아온다. 
//그래서그 받아온 데이터를 popular/toprate... 등에 담는다. 그리고 이상이 없으면 로딩을 false로 바꿔놓고 끝내겠다. 에러는 여전히 널 //
// try 가 가장 먼저 실행되고, 에러가 나면 catch로 가고 ㅗ마무리는 finally//
  async componentDidMount() {
    try {
      const upcoming = await moviesApi.upcoming(); // 무비스 api에서 업커밍을 태운 데이터를 업커밍이라고 칭한다//
      const popular = await moviesApi.popular();
      const nowPlaying = await moviesApi.nowPlaying();
//upcoming에는 upcoming을 넣겠다. ComponentDidMount를 지나가면 빨간색 upcoming 안에 하얀색 상태값 upcoming을 데이터를 담겠다는 것/뜻 //
      this.setState({
        upcoming: upcoming,
        popular: popular,
        nowPlaying: nowPlaying
      })

    
    } catch {
        this.setState({ error: "Can't get Movie Data"});
    } finally {
        this.setState({ loading: false}); //상태값의 로딩을 뜻한다//
    }
  }

  render() {
    const { loading, popular, upcoming, nowPlaying } = this.state;
    console.log(popular)
    return <MoviesPresenter loading={loading} />;
  }
}

export default MoviesContainer;