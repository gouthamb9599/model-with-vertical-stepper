import { Modal, Typography, Divider, Button } from "antd";
import React, { useState } from "react";
import VerticalStepperComponent from "./VerticalStepperComponent";
import "../styles/ModalComponent.less";
const { Text, Paragraph } = Typography;

function ModalComponent({ config }) {
  console.log(config);
  const [visible, setVisible] = useState(false);
  const openModal = () => {
    setVisible(!visible);
  };
  const handleOk = () => {
    setVisible(false);
  };
  return (
    <div>
      <Button onClick={openModal}>{config.title}</Button>
      <Modal
        visible={visible}
        onCancel={handleOk}
        centered
        title={config.title}
        footer={[
          <Button key="Cancel" onClick={handleOk}>
            Cancel
          </Button>,
          <Button key="Done" type="primary" onClick={handleOk}>
            Done
          </Button>
        ]}
      >
        <Paragraph>{config.description1}</Paragraph>
        <Text disabled>{config.currentvalue}</Text>
        <Divider></Divider>
        <VerticalStepperComponent
          data={config.VerticalStepper}
          step1={config.step1}
          step2={config.step2}
          step3={config.step3}
        />
      </Modal>
    </div>
  );
}
export default ModalComponent;
