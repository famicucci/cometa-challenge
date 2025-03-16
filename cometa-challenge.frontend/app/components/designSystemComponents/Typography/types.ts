import { ReactNode } from "react";
import { typographies } from "./availableTypographies";

export type TypographyProps = {
  children: ReactNode;
  variant: keyof typeof typographies;
  bold?: boolean;
  className?: string;
};

export type Typographies =
  | "h2"
  | "h3"
  | "h5"
  | "body small"
  | "body medium"
  | "body big";
