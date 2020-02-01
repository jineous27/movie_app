
import { createStackNavigator } from "react-navigation-stack";
import { BG_COLOR, WHITE } from "../constants/Colors";
//내가 컴포넌트를 직접 만드는 것, 해더스타일스 상수 안에 3가지 특징을 규정 // 하나의 속성을 쓰고 싶으면 headerstyles.headerstyle//
export const headerStyles = {
    headerStyle: {
        backgroundColor: BG_COLOR,
        borderBottomColor: 0
    },
    headerTitleStyle: {
        color: WHITE
    },
    headerTintColor: WHITE
};
//여기 screen은 규정할 거다//
export const createStack = (screen, title) =>
    createStackNavigator({
        Screen: {
            screen,
            navigationOptions: {
                title, 
                ...headerStyles
            }
        }
    });