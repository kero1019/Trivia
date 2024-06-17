import React from "react";
export default function MainButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-button-background text-white-color rounded-[17px] p-[15px] w-[200px]"
    >
      {props.children}
    </button>
  );
}
