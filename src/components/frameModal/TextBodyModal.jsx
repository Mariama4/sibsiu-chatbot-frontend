import { observer } from "mobx-react-lite";
import React from "react";

const TextBodyModal = observer(({ frame }) => {
  return <h1>{frame.type}</h1>;
});

export default TextBodyModal;
