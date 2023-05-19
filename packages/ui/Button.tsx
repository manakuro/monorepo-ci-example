"use client";

import * as React from "react";

type Props = {
  text?: string
}

export const Button: React.FC<Props> = (props) => {
  return <button onClick={() => alert("boop")}>{props.text || 'Boop'}</button>;
};
