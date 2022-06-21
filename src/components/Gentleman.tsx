import { iGentlemanData } from "../interfaces/iGentlemanData";
import { GentlemanButtonCheck } from "./GentlemanButtonCheck";
import { GentlemanButtonDelete } from "./GentlemanButtonDelete";

export const Gentleman = ({
  individualData,
  handleGentlemanStatus,
  deleteGentleman,
}: {
  individualData: iGentlemanData;
  handleGentlemanStatus(id: number): void;
  deleteGentleman(id: number): void;
}) => {
  return (
    <>
      <li
        className={"gentleman" + (individualData.selected ? " selected" : "")}
      >
        <div className="gentleman__avatar-container">
          <img
            className="gentleman__avatar"
            src={individualData.picture}
            alt="The Fary pointing at you"
          />
          <span className="gentleman__initial">
            {individualData.name[0].toUpperCase()}
          </span>
        </div>
        <div className="gentleman__data-container">
          <h2 className="gentleman__name">{individualData.name}</h2>
          <ul className="gentleman__data-list">
            <li className="gentleman__data">
              <span className="gentleman__data-label">Profession:</span>
              {individualData.profession}
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Status:</span>{" "}
              {individualData.status}
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Twitter:</span>{" "}
              {individualData.twitter}
            </li>
          </ul>
        </div>
        <GentlemanButtonCheck
          isSelected={handleGentlemanStatus}
          individualData={individualData}
        />
        <GentlemanButtonDelete
          deleteGentleman={deleteGentleman}
          individualData={individualData}
        />
      </li>
    </>
  );
};
