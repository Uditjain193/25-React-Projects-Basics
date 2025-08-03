import Accordian from "./components/accordian";
import AutoComplete from "./components/autocomplete";
import Modal from "./components/custom-model-popup";
import TabTest from "./components/custom-tabs";
import GithubProfile from "./components/github-profile-finder";
import Image from "./components/imageSlider";
import LightDarkMode from "./components/light-dark-mode";
import Loadmore from "./components/load-more";
import { QRcode } from "./components/qr-code";
import RandomColor from "./components/randomColor";
import ScrollIndicator from "./components/scroll-indicator";
import Star from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

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
      <TicTacToe />
    </div>
  );
}

export default App;
