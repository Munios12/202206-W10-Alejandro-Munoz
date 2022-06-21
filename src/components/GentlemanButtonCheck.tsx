import React from "react";
import { iGentlemanData } from "../interfaces/iGentlemanData";

export const GentlemanButtonCheck = ({
  isSelected,
  individualData,
}: {
  isSelected(id: number): void;
  individualData: iGentlemanData;
}) => {
  return (
    <i
      className="icon gentleman__icon fas fa-check"
      onClick={() => isSelected(individualData.id)}
    ></i>
  );
};
