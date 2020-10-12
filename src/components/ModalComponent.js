import { Modal, Typography, Divider, Button } from "antd";
import React, { useState } from "react";
import VerticalStepperComponent from "./VerticalStepperComponent";
const { Text, Paragraph } = Typography;

function ModalComponent(props) {
  const [visible, setVisible] = useState(false);
  // console.log(props.data.modalComponent);
  const modalComponent = props.data.modalComponent;
  console.log(modalComponent.VerticalStepper, modalComponent.step1);
  const openModal = () => {
    setVisible(!visible);
  };
  const onok = () => {
    setVisible(false);
  };
  return (
    <div>
      <Button type="primary" onClick={openModal}>
        Open Modal with customized button props
      </Button>
      <Modal
        visible={visible}
        onCancel={onok}
        centered
        title={modalComponent.title}
      >
        <Paragraph>{modalComponent.description1}</Paragraph>
        <Text disabled>{modalComponent.currentvalue}</Text>
        <Divider></Divider>
        <VerticalStepperComponent
          data={modalComponent.VerticalStepper}
          step1={modalComponent.step1}
          step2={modalComponent.step2}
          step3={modalComponent.step3}
        />
      </Modal>
    </div>
  );
}
export default ModalComponent;
