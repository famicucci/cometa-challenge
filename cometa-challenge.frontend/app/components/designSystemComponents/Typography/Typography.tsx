import React from "react";
import { typographies } from "./availableTypographies";
import { TypographyProps } from "./types";

const Typography = ({
  children,
  variant,
  bold = false,
  className,
}: TypographyProps) => {
  const Tag = typographies[variant].tag;
  const font = typographies[variant].styles;

  return React.createElement(
    Tag,
    {
      className: `${font} ${bold ? "font-bold" : ""} ${className || ""}`.trim(),
    },
    children
  );
};

export default Typography;
