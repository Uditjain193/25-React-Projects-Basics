import React, { useContext } from "react";
import { FeatureFlagContext } from "./context";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import TabTest from "../custom-tabs";
import TreeView from "../tree-view";
import Accordian from "../accordian";
import RandomColor from "../randomColor";
import menus from "../tree-view/data";

const FeatureFlags = () => {
  const { loading, enabledflags } = useContext(FeatureFlagContext);
  const componentstorender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showTabs",
      component: <TabTest />,
    },
  ];
  function checkenabledflags(getcurrentkey) {
    return enabledflags[getcurrentkey];
  }
  if (loading) return <h1>Loading data! Please wait</h1>;
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentstorender.map((item) =>
        checkenabledflags(item.key) ? item.component : null
      )}
    </div>
  );
};

export default FeatureFlags;
