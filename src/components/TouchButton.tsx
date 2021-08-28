import React, { ComponentProps } from "react";

export const TouchButton: React.FC<
  ComponentProps<"button"> & { onClick: () => unknown }
> = ({ onClick, ...rest }) => {
  return <button {...rest} onTouchStart={onClick}  />;
};
