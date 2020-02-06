import React from "react"
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";

const MoviesPresenter = ({ loading }) =>
    loading ? <Loader /> : <Text>Movies</Text>;


MoviesPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default MoviesPresenter;






// import React from "react"
// import { Text } from "react-native";
// import PropTypes from "prop-types";
// import Loader from "../../Components/Loader";

// //Loading이 true면 loader 가 뜨고, False보면 글씨 movies가 ㅅ뜸. 컴포넌트를 만들었음 //
// const MoviesPresenter = ({ loading }) => 
//     loading ? <Loader /> : <Text>Movies</Text>;


// MoviesPresenter.propTypes = {
//     loading: PropTypes.bool.isRequired //로딩이라는 속성을 가지고 있고, 프로퍼티는 참/거짓인지 필수로 규정/
// };

// export default MoviesPresenter;