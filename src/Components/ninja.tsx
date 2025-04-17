import { GiNinjaHead, GiNinjaStar } from "react-icons/gi";
import { GiRunningNinja } from "react-icons/gi";
import "../style.css";

type NinjaProps = {
  name: string;
  age: number;
  image: string;
  color: string;
  powerLevel: number;
  skills: string[];
  personality: { brave: boolean; leader: boolean; loyal: boolean };
};
function NinjaList({ ninjas }: { ninjas: NinjaProps[] }) {
  return (
    <>
      <h1 className="display-1 mb-5 text-center">NINJA CARDS GAME </h1>
      <div className="row  gap-5 justify-content-center  transition  shadow  ">
        {ninjas.map((ninja, index) => (
          <div
            key={index}
            className={` ${ninja.color} col-lg-3 col-md-6 col-sm-12 text-center mt-3 rounded `}
          >
            <div>
              <img
                className="w-100 h-100 object-cover img-thumbnail mt-3"
                src={`/${ninja.image}`}
                alt="ninja char"
              />
            </div>
            <div className="d-flex flex-row justify-content-center">
              <p className="mt-2 me-3 bg-danger rounded p-2 text-white fw-bold">
                {ninja.name} | {ninja.age}
              </p>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-2">
              <span className="badge bg-info rounded-pill p-2">
                {ninja.skills[0]}
              </span>
              <span className="badge bg-danger border rounded-pill p-2">
                {ninja.skills[1]}
              </span>
              <span className="badge bg-warning rounded-pill p-2">
                {ninja.skills[2]}
              </span>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center gap-2 bg-light rounded my-2 p-2">
              <span className="fw-bold">Power Level:</span>
              <span className="text-info fs-4">{ninja.powerLevel}</span>
              <div className="text-warning fs-4">
                {ninja.powerLevel > 8 ? (
                  <GiNinjaStar />
                ) : ninja.powerLevel > 9 ? (
                  <GiRunningNinja />
                ) : (
                  <GiNinjaHead />
                )}
              </div>
            </div>
            <div className="bg-warning rounded d-flex flex-row mb-2 p-2 justify-content-around">
              <p className="text-dark fw-bold">
                Brave:{" "}
                <span className="text-success">
                  {ninja.personality.brave ? "Yes" : "No"}
                </span>
              </p>
              <p className="text-dark fw-bold">
                Leader:{" "}
                <span className="text-success">
                  {ninja.personality.leader ? "Yes" : "No"}
                </span>
              </p>
              <p className="text-dark fw-bold">
                Loyal:{" "}
                <span className="text-success">
                  {ninja.personality.loyal ? "Yes" : "No"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default NinjaList;
