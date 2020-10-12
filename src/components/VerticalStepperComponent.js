import { Button, Steps, Typography, Input } from "antd";
import React, { useState } from "react";
const { Step } = Steps;
const { Paragraph, Text } = Typography;
const { Search } = Input;

function VerticalStepperComponent() {
  const [IMEI, setIMEI] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState(false);
  const [visualize, setVisualize] = useState(1);
  const checkIMEI = () => {
    if (IMEI === "123123123124") {
      setConfirm(true);
      setVisualize(2);
    } else {
      setError(true);
    }
  };
  const openConfirmation = () => {
    setVisualize(3);
  };
  const handlechange = (e) => {
    setIMEI(e.target.value);
  };
  const retry = () => {
    setConfirm(false);
    setError(false);
  };
  return (
    <Steps direction="vertical" size="small" current={visualize}>
      <Step
        key={1}
        title={
          <div
            className="stepper-step-title-container"
            style={{ display: "flex" }}
          >
            <Paragraph style={{ width: "116px" }}>New IMEI Number</Paragraph>
            <Text style={{ position: "absolute", right: "-300px" }} disabled>
              Step 1
            </Text>
          </div>
        }
        description={
          <div className="stepper-step-description-container">
            <br />
            {error === false && confirm === false ? (
              <div>
                <Search
                  type="text"
                  placeholder="please enter New IMEI number"
                  value={IMEI}
                  maxLength={15}
                  enterButton="Validate"
                  onSearch={checkIMEI}
                  onChange={handlechange}
                />
              </div>
            ) : (
              <></>
            )}
            {error === true ? (
              <div>
                <Text type="danger">Invalid IMEI Number</Text>
                <br />
                <Button onClick={retry}>Retry</Button>
              </div>
            ) : (
              <></>
            )}
            {confirm === true ? (
              <div>
                <Text type="success">1231 1231 1231 124</Text>
              </div>
            ) : (
              <></>
            )}
          </div>
        }
        disabled={true}
      />
      <Step
        key={2}
        title={
          <div style={{ display: "flex" }}>
            <Paragraph style={{ width: "116px" }}>Validation</Paragraph>
            <Text style={{ position: "absolute", right: "-300px" }} disabled>
              Step 2
            </Text>
          </div>
        }
        description={
          <div className="stepper-step-title-container">
            {visualize === 2 ? (
              <div>
                <Paragraph>
                  Please confirm your IMEI change from 3452 2314 1313 111 to
                  1231 2312 3123 124
                </Paragraph>
                <Button onClick={openConfirmation}>Confirm</Button>
              </div>
            ) : (
              <></>
            )}
            {visualize === 3 ? (
              <Text type="success">IMEI SUCCESSFULLY VALIDATED</Text>
            ) : (
              <></>
            )}
          </div>
        }
        disabled={true}
      />

      <Step
        key={3}
        title={
          <div style={{ display: "flex" }}>
            <Paragraph style={{ width: "116px" }}>Confirmation</Paragraph>
            <Text style={{ position: "absolute", right: "-300px" }} disabled>
              Step 3
            </Text>
          </div>
        }
        description={
          <div>
            {visualize === 3 ? (
              <div>
                <Paragraph>
                  Change IMEI for the selected device has successfully confirmed
                </Paragraph>
                <Text>New IMEI:</Text>
                <Text type="success">1231 1231 1231 124</Text>
                <Text>Old IMEI:</Text>
                <Text>3452 2314 1313 111</Text>
              </div>
            ) : (
              <></>
            )}
          </div>
        }
        disabled={true}
      />
    </Steps>
  );
}
export default VerticalStepperComponent;
