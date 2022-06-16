import React from "react";

export const GentlemanButtonCheck = ({
  isSelected,
}: {
  isSelected(id: number): void;
}) => {
  const selectGentleman = () => {
    console.log("hola");
  };

  return (
    <i
      className="icon gentleman__icon fas fa-check"
      onClick={selectGentleman}
    ></i>
  );
};
