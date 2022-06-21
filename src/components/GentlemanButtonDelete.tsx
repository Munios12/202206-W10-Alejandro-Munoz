import React from "react";
import { iGentlemanData } from "../interfaces/iGentlemanData";

export const GentlemanButtonDelete = ({
  deleteGentleman,
  individualData,
}: {
  deleteGentleman(id: number): void;
  individualData: iGentlemanData;
}) => {
  return (
    <>
      <i
        className="icon gentleman__icon gentleman__icon--delete fas fa-times"
        onClick={() => deleteGentleman(individualData.id)}
      ></i>
    </>
  );
};
