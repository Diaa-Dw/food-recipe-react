import React, { useEffect, useState } from "react";
import { Alert } from "./styles/ErrorBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
export default function ErrorBar({ message, dispatch }) {
  const [close, setClose] = useState(false);
  const handleClose = () => {
    dispatch({ type: "resetError" });
    setClose(true);
  };
  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 8000);
  });
  if (close) return null;

  return (
    <Alert>
      <div class="icon__wrapper">
        <span>
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </span>
      </div>
      <p>{message}</p>
      <span class="mdi mdi-open-in-new open"></span>
      <span class="mdi mdi-close close" onClick={handleClose}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
    </Alert>
  );
}
