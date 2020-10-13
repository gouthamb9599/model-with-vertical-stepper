import { Modal, Typography, Divider, Button } from "antd";
import React, { useState } from "react";
import VerticalStepperComponent from "./VerticalStepperComponent";
import "../styles/ModalComponent.less";
const { Text, Paragraph } = Typography;

function ModalComponent(props) {
  const [visible, setVisible] = useState(false);
  const modalComponent = props.data;
  const openModal = () => {
    setVisible(!visible);
  };
  const onok = () => {
    setVisible(false);
  };
  return (
    <div>
      <Button onClick={openModal}>{modalComponent.title}</Button>
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
