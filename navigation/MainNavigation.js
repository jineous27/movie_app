import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";

const MainNavigation = createStackNavigator(
    {
        Tabs: {
            screen: TabNavigation,
            navigationOptions: {
                header: null
            }
        },
        Detail: DetailScreen //Movie를 누르고 들어가서 나오는 확장되는 / 하위 메뉴/화면//
    },
    {}
);

export default createAppContainer(MainNavigation);