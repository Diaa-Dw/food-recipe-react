import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { EmpetyMessageContainer } from "./styles/EmpetyMessage.styled";

export default function EmpetyMessage() {
  return (
    <EmpetyMessageContainer>
      <FontAwesomeIcon icon={faFaceSmile} />
      <p>Start by searching for a recipe or an ingredient. Have fun!</p>
    </EmpetyMessageContainer>
  );
}
