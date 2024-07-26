"use client";
import { ReactTyped } from "react-typed";
import { TypeTextProps } from "./types";

export default function TypeWriter(props: TypeTextProps) {
  return (
    <div>
      <ReactTyped strings={[props.text]} typeSpeed={40} />
    </div>
  );
}
