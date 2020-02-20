import React from "react";
import GlobalStyles from "./GlobalStyles";
import TabMenu from "./TabMenu";
import MainSection from "./MainSection";

const contents = [
  {
    id: 1,
    title: "Menu1",
    content: "This is Menu1"
  },
  {
    id: 2,
    title: "Menu2",
    content: "This is Menu2"
  },
  {
    id: 3,
    title: "Menu3",
    content: "This is Menu3"
  },
  {
    id: 4,
    title: "Menu4",
    content: "This is Menu4"
  }
];

function App() {
  return (
    <>
      <TabMenu menuList={contents} title="Gamja" />
      <MainSection contents={contents} />
      <GlobalStyles />
    </>
  );
}

export default App;
