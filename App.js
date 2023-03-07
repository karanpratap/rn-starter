import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/counterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ColorAdjustor from "./src/screens/ColorAdjustor";
import ColorAdjustorReducer from "./src/screens/ColorAdjustorReducer";
import CounterScreenReducer from "./src/screens/counterScreenReducer";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Adjustor: ColorAdjustor,
    AdjustorReducer: ColorAdjustorReducer,
    CounterReducer: CounterScreenReducer,
    Text: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
