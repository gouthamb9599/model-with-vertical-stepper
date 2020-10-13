import React, { Suspense } from "react";
import "./styles.css";
import "antd/dist/antd.css";
// import ModalComponent from "./components/ModalComponent.js";
// import Setup from "./config/dashboard.json";
import { getComponentsForAppConfig } from "./helper";

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading a view</div>}>
        {getComponentsForAppConfig()}
      </Suspense>
      {/* <ModalComponent data={Setup.components.modalComponent} />
      <ModalComponent data={Setup.components.modalComponent2} /> */}
    </div>
  );
}
