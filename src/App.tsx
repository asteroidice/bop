import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import "./styles/reset.css";
import { Loop } from "./views/Loop";
import { loopGrid } from "./data/loops";
import { oneShotGrid } from "./data/oneShots";
import { OneShot } from "./views/OneShot";
import { audioManager } from "./store/audioManager";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

audioManager.loadSamples(oneShotGrid);
audioManager.loadSamples(loopGrid);

function App() {
  return (
    <div
      css={css`
        /* width: 100%;
        height: 100%; */
        height: 100vh;
        display: flex;
        flex-direction: row;
      `}
    >

      <Wrapper row={3} col={2}>
        {loopGrid.map((sample) => {
          return <Loop key={sample.id} sample={sample} />;
        })}
      </Wrapper>
      <VerticalRule />
      <Wrapper col={3} row={3}>
        {oneShotGrid.map((sample) => (
          <OneShot key={sample.id} sample={sample} />
        ))}
      </Wrapper>
      <VerticalRule />
    </div>
  );
}

const VerticalRule = styled.div`
  flex: 0 0 1px;
  border-right: solid 1px #4a4a4a;
  margin: 20px 0;
`;

const Wrapper = styled.div<{ col?: number; row?: number }>`
  margin: 10px;
  flex: 1 1 auto;
  display: grid;
  grid-template: ${({ col = 2, row = 2 }) =>
    [Array.from(new Array(row))
          .map(() => "1fr")
          .join(" "), Array.from(new Array(col))
          .map(() => "1fr")
          .join(" ")]
      .join(" / ")};
  grid-gap: 10px;
`;

export default App;
