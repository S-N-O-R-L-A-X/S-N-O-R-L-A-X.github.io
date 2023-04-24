import { PropsWithChildren, ReactNode } from "react";


import "./index.css";

export default function Label(props: PropsWithChildren) {
  const { children } = props;
  return (
    <>
      <button className="custom-btn btn-4"><span>{children}</span></button>
    </>
  )
}