import React from "react";
import { IoIosCloudDownload } from "react-icons/io";
import { ControlsContainer } from "./Controls.styles";

const Controls = () => {
  return (
    <ControlsContainer>
      <div className="start">
        <h2>Start</h2>
        <button>
          <IoIosCloudDownload />
        </button>
      </div>
    </ControlsContainer>
  );
};

export default Controls;
