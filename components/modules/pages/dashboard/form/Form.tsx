import React from "react";
import { FormContainer } from "./Form.styles";

const Form = () => {
  return (
    <FormContainer>
      <div className="header">
        <h1>Create Form</h1>
        <div className="close">Close</div>
      </div>
      <div className="form-container">
        <form>Form</form>
        <div className="controls">Controls</div>
      </div>
    </FormContainer>
  );
};

export default Form;
