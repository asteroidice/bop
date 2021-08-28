import React from "react";
import { TouchButton } from "../components/TouchButton";
import { ISample } from "../data/utils";
import { audioManager } from "../store/audioManager";

export const Loop: React.FC<{ sample: ISample }> = ({ sample }) => {
  return (
    <TouchButton
      className="square"
      onClick={() => audioManager.play(sample.id)}
    >
      {sample.name}
    </TouchButton>
  );
};
