import React from "react";
import { TouchButton } from "../components/TouchButton";
import { ISample } from "../data/utils";
import { audioManager } from "../store/audioManager";

export const OneShot: React.FC<{ sample: ISample }> = ({ sample }) => {
  return (
    <TouchButton
      className="circle"
      onClick={() => audioManager.play(sample.id)}
    >
      {sample.name}
    </TouchButton>
  );
};
