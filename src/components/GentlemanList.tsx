import React from "react";
import { iGentlemanData } from "../interfaces/iGentlemanData";
import { Gentleman } from "./Gentleman";

export const GentlemanList = ({
  gentlemanListInfo,
  handleGentlemanStatus,
}: {
  gentlemanListInfo: Array<iGentlemanData>;
  handleGentlemanStatus(id: number): void;
}) => {
  return (
    <>
      <ul>
        {gentlemanListInfo.map((gentleman) => (
          <Gentleman
            key={gentleman.id}
            individualData={gentleman}
            handleGentlemanStatus={() => handleGentlemanStatus(gentleman.id)}
          />
        ))}
      </ul>
    </>
  );
};
