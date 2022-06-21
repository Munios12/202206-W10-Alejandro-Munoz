import React from "react";
import { iGentlemanData } from "../interfaces/iGentlemanData";

export const Controller = ({
  gentlemanListInfo,
  selectAllGentleman,
}: {
  gentlemanListInfo: Array<iGentlemanData>;
  selectAllGentleman(): void;
}) => {
  const selectedCounter = gentlemanListInfo.filter(
    (gentleman) => gentleman.selected === true
  );

  return (
    <>
      <p className="info">{selectedCounter.length} gentlemen pointing at you</p>
      <button className="button button--select" onClick={selectAllGentleman}>
        Select all
      </button>
    </>
  );
};
