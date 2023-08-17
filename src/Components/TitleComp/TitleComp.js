import React from "react";
import { ChevronRight } from "lucide-react";

export default function TitleComp(props) {
  return (
    <div style={{ padding: "40px", paddingBottom: "2px" }}>
      <header className="choice-Head">
        <div className="headbar"></div>
        <h1>{props.heading}</h1>
        <ChevronRight size={30} strokeWidth={2.5} className="headlink" />
      </header>
    </div>
  );
}
