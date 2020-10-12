import React, { Suspense } from "react";
import "./styles.css";
import "antd/dist/antd.css";
import { getComponentsForAppConfig } from "./helper";

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading a view</div>}>
        {getComponentsForAppConfig()}
      </Suspense>
    </div>
  );
}
