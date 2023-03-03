import React from "react";

export default function AppsGrandChild(props) {
  return (
    <div>
      AppsGrandChild
      <div>Data recieved from APP {props.data.name}</div>
      <button
        onClick={() => {
          props.updateMsg("bye");
        }}
      >
        Update msg
      </button>
    </div>
  );
}
