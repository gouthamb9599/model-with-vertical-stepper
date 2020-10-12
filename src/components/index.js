import { lazy } from "react";

const ModalComponent = lazy(() => import("./ModalComponent"));
const VerticalStepperComponent = lazy(() =>
  import("./VerticalStepperComponent")
);

export { ModalComponent, VerticalStepperComponent };
