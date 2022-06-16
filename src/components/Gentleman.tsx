import { iGentlemanData } from "../interfaces/iGentlemanData";
import { GentlemanButtonCheck } from "./GentlemanButtonCheck";

export const Gentleman = ({
  individualData,
  handleGentlemanStatus,
}: {
  individualData: iGentlemanData;
  handleGentlemanStatus(id: number): void;
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
          <span className="gentleman__initial">F</span>
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
        <GentlemanButtonCheck isSelected={handleGentlemanStatus} />
        <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
      </li>
    </>
  );
};
