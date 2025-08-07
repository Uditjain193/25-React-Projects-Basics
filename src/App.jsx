import Accordian from "./components/accordian";
import AutoComplete from "./components/autocomplete";
import Modal from "./components/custom-model-popup";
import TabTest from "./components/custom-tabs";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import Food from "./components/food-recipe";
import GithubProfile from "./components/github-profile-finder";
import Image from "./components/imageSlider";
import LightDarkMode from "./components/light-dark-mode";
import Loadmore from "./components/load-more";
import { QRcode } from "./components/qr-code";
import RandomColor from "./components/randomColor";
import ScrollToTopAndBottom from "./components/Scroll";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToSection from "./components/Scroll/ScrollToSection";
import ShoppingCart from "./components/shopping-cart";
import Star from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetch from "./components/use-fetch";
import OutsideClick from "./components/use-outside-click";
import WindowResize from "./components/use-window-resize";
import WeatherApp from "./components/weatherApp";

function App() {
  return (
    <div>
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <Star noofstar={8}/> */}
      {/* <Image/> */}
      {/* <Loadmore /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QRcode/> */}
      {/* <TabTest/> */}
      {/* <LightDarkMode/> */}
      {/* <GithubProfile/> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <Modal /> */}
      {/* <AutoComplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState> */}
      {/* <UseFetch/> */}
      {/* <ScrollToTopAndBottom/> */}
      {/* <ScrollToSection /> */}
      {/* <OutsideClick /> */}
      {/* <WindowResize />  */}
      {/* <WeatherApp /> */}
      {/* <Food /> */}
      {/* <ShoppingCart /> */}
    </div>
  );
}

export default App;
