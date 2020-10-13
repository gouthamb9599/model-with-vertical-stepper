import { Button, Steps, Typography, Input } from "antd";
import React, { useState } from "react";
import { getComponentForProps } from "../helper";
import "../styles/VerticalStepperComponent.less";
const { Step } = Steps;
const { Paragraph, Text } = Typography;
const { Search } = Input;

function VerticalStepperComponent(props) {
  const StepperDetails = props.data;
  const step1Details = props.step1;
  const step2Details = props.step2;
  const step3Details = props.step3;
  const [IMEI, setIMEI] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState(false);
  const [visualize, setVisualize] = useState(1);
  const checkIMEI = () => {
    if (IMEI === step1Details.params.new) {
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
  let getButtons = () => {
    if (step1Details.params.buttons.length > 0) {
      const buttons = [];
      params.buttons.forEach((buttonConfig) => {
        buttons.push(getComponentForProps("ButtonComponent", buttonConfig));
      });
      return buttons;
    }
  };

  return (
    <Steps
      direction={StepperDetails.direction}
      size={StepperDetails.size}
      current={visualize}
    >
      <Step
        key={1}
        title={
          <div
            className={StepperDetails.styles.stepDiv}
            style={{ display: "flex" }}
          >
            <Paragraph
              className={StepperDetails.styles.stepTitle}
              style={{ width: "150px" }}
            >
              {step1Details.params.title}
            </Paragraph>
            <Text
              className={StepperDetails.styles.stepCount}
              style={{ position: "absolute", right: "-250px" }}
              disabled
            >
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
                  maxLength={step1Details.params.maxLength}
                  enterButton="Validate"
                  onSearch={checkIMEI}
                  onChange={handlechange}
                />
              </div>
            ) : (
              <></>
            )}
            {error === true && confirm === false ? (
              <div>
                <Text type="danger">{step1Details.params.error}</Text>
                {/* <br />
                <Button onClick={retry}>Retry</Button> */}
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
          <div
            className={StepperDetails.styles.stepDiv}
            style={{ display: "flex" }}
          >
            <Paragraph
              className={StepperDetails.styles.stepTitle}
              style={{ width: "150px" }}
            >
              {step2Details.params.title}
            </Paragraph>
            <Text
              className={StepperDetails.styles.stepCount}
              style={{ position: "absolute", right: "-250px" }}
              disabled
            >
              Step 2
            </Text>
          </div>
        }
        description={
          <div className="stepper-step-description-container">
            {visualize === 2 ? (
              <div>
                <Paragraph>{step2Details.params.description}</Paragraph>
                {getButtons(step2Details.params.buttons)}
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
          <div
            className={StepperDetails.styles.stepDiv}
            style={{ display: "flex" }}
          >
            <Paragraph
              className={StepperDetails.styles.stepTitle}
              style={{ width: "150px" }}
            >
              {step3Details.params.title}
            </Paragraph>
            <Text
              className={StepperDetails.styles.stepCount}
              style={{ position: "absolute", right: "-250px" }}
              disabled
            >
              Step 3
            </Text>
          </div>
        }
        description={
          <div>
            {visualize === 3 ? (
              <div>
                <Paragraph>{step3Details.params.description}</Paragraph>
                <Text>New {StepperDetails.value}:</Text>
                <Text type="success"> {step3Details.params.new}</Text>
                <Text>Old {StepperDetails.value}:</Text>
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
