import React from "react";
import { iGentlemanData } from "../interfaces/iGentlemanData";
import { Gentleman } from "./Gentleman";

export const GentlemanList = ({
  gentlemanListInfo,
}: {
  gentlemanListInfo: Array<iGentlemanData>;
}) => {
  return (
    <>
      <ul>
        {gentlemanListInfo.map((gentleman) => (
          <Gentleman key={gentleman.id} individualData={gentleman} />
        ))}
      </ul>
    </>
  );
};
