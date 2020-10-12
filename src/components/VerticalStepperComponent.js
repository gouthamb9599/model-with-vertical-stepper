import { Button, Steps, Typography, Input } from "antd";
import React, { useState } from "react";
const { Step } = Steps;
const { Paragraph, Text } = Typography;
const { Search } = Input;

function VerticalStepperComponent(props) {
  console.log(props);
  const StepperDetails = props.data;
  const step1Details = props.step1;
  const step2Details = props.step2;
  const step3Details = props.step3;
  console.log(StepperDetails, step1Details, step2Details, step3Details);
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
    <Steps
      direction="vertical"
      size={StepperDetails.params.size}
      current={visualize}
    >
      <Step
        key={1}
        title={
          <div
            className="stepper-step-title-container"
            style={{ display: "flex" }}
          >
            <Paragraph style={{ width: "116px" }}>
              {step1Details.params.title}
            </Paragraph>
            <Text style={{ position: "absolute", right: "-300px" }} disabled>
              Step 1
            </Text>
          </div>
        }
        description={
          <div className="stepper-step-description-container">
            <br />
            {confirm === false ? (
              <div>
                <Search
                  type="text"
                  placeholder={step1Details.params.description}
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
                <Text type="danger">{step1Details.params.error}</Text>
                <br />
                <Button onClick={retry}>Retry</Button>
              </div>
            ) : (
              <></>
            )}
            {confirm === true ? (
              <div>
                <Text type="success">{step1Details.params.success}</Text>
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
            <Paragraph style={{ width: "116px" }}>
              {" "}
              {step2Details.params.title}
            </Paragraph>
            <Text style={{ position: "absolute", right: "-300px" }} disabled>
              Step 2
            </Text>
          </div>
        }
        description={
          <div className="stepper-step-title-container">
            {visualize === 2 ? (
              <div>
                <Paragraph>{step2Details.params.description}</Paragraph>
                <Button onClick={openConfirmation}>
                  {step2Details.params.buttons.name}
                </Button>
              </div>
            ) : (
              <></>
            )}
            {visualize === 3 ? (
              <Text type="success"> {step2Details.params.success}</Text>
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
            <Paragraph style={{ width: "116px" }}>
              {step3Details.params.title}
            </Paragraph>
            <Text style={{ position: "absolute", right: "-300px" }} disabled>
              Step 3
            </Text>
          </div>
        }
        description={
          <div>
            {visualize === 3 ? (
              <div>
                <Paragraph>{step3Details.params.description}</Paragraph>
                <Text>New IMEI:</Text>
                <Text type="success"> {step3Details.params.new}</Text>
                <Text>Old IMEI:</Text>
                <Text> {step3Details.params.old}</Text>
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
