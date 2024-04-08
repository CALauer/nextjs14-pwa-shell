import React from "react";

export default function Section({ children, styleClass }) {
  return <section className={styleClass}>{children}</section>;
}
