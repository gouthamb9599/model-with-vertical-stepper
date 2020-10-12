import { Modal, Typography, Divider, Button } from "antd";
import React, { useState } from "react";
import VerticalStepperComponent from "./VerticalStepperComponent";
const { Text, Paragraph } = Typography;

function ModalComponent({ config }) {
  const [visible, setVisible] = useState(false);
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
      <Modal visible={visible} onCancel={onok} centered title="Change IMEI">
        <Paragraph>Changing IMEI Number for 784-223-23422</Paragraph>
        <Text disabled>3452 2314 1313 111</Text>
        <Divider></Divider>
        <VerticalStepperComponent />
      </Modal>
    </div>
  );
}
export default ModalComponent;
