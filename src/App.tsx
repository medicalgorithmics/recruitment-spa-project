import { grey } from "@ant-design/colors";
import React from "react";
import styled from "styled-components";

import mdglogo from "./logo-medicalgorithmics.png";

const App: React.FC = () => {
  return (
    <AppWrapper>
      <div className="App">
        <header className="App-header">
          <img src={mdglogo} className="App-logo" alt="logo" />
          <p>Medicalgorithmics recruitment task</p>
        </header>
      </div>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  .App {
    text-align: center;
  }

  .App-logo {
    height: 50px;
    pointer-events: none;
  }

  .App-header {
    background-color: ${grey[1]};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${grey[6]};
  }
`;

export default App;
