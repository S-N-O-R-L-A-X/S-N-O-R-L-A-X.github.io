import { ReactNode } from "react";

interface LabelProps {
  children?: ReactNode | ReactNode[];
}

import "./index.css"

export default function Label(props: LabelProps) {
  const { children } = props;
  return (
    <>
      <button className="custom-btn btn-4"><span>{children}</span></button>
    </>
  )
}