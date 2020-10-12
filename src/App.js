import React from "react";
import "./styles.css";
import "antd/dist/antd.css";
import ModalComponent from "./components/ModalComponent.js";
import Setup from "./config/config.json";
// import { getComponentsForAppConfig } from "./helper";

export default function App() {
  // console.log(Setup);
  return (
    <div className="App">
      {/* <Suspense fallback={<div>Loading a view</div>}>
        {getComponentsForAppConfig()}
      </Suspense> */}
      <ModalComponent data={Setup} />
    </div>
  );
}
