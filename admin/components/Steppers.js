import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Divider, Grid, Typography } from "@mui/material";
const steps = ["Add Post Details", "Checkout"];
export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [open, setOpen] = React.useState(false);
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    setOpen((s) => !s);
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setOpen((s) => !s);
  };
  return (
    <div>

      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
    <Box sx={{ width: "500px", }}>
      <Stepper activeStep={activeStep}   >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps} >
              <StepLabel
                {...labelProps}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        (alert("done"), setActiveStep((prevActiveStep) => prevActiveStep - 2))
      ) : (
        <React.Fragment>
           <div style={{ visibility: open ? "hidden" : "visible" }}>
          <a href="/Posts">Ttft</a>
          </div>
          <div style={{ visibility: open ? "visible" : "hidden" }}>gggcg</div>

         
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Box />
            <Button
              onClick={handleNext}
              sx={{ background: "#f90", color: "#fff" }}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </div>
    </div>
  );
}
