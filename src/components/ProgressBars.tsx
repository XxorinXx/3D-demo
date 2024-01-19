import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
// import Icon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import pwoeredBy from "../assets/images/poweredByIcon.png";
// import icon from "../assets/images/icon.png";

interface ProgressBarsProps {
  activeBars: number;
  numOfSteps: number;
  step: number;
  onClick?: () => void;
}

const ProgressBars = ({ activeBars, onClick, numOfSteps, step }: ProgressBarsProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeProgressBar, setActiveProgressBar] = useState(Array(numOfSteps).fill(false));

  useEffect(() => {
    const updatedActiveBars = Array(numOfSteps).fill(false);

    updatedActiveBars.map((_, index) => {
      if (index < activeBars) {
        updatedActiveBars[index] = true;
      }
    });
    setActiveProgressBar(updatedActiveBars);
  }, [activeBars, numOfSteps]);

  useEffect(() => {
    // console.log("activeBars", activeBars);
    // console.log("numOfSteps", numOfSteps);
    // console.log("step", step);
    // console.log("activeProgressBar", activeProgressBar.length);
  }, [activeBars, numOfSteps, step]);

  interface BarProps {
    isActive: boolean;
  }

  const Bar = ({ isActive }: BarProps) => {
    return numOfSteps === 1 ? (
      <></>
    ) : numOfSteps === 2 ? (
      <div className={twMerge("w-[48.5%]  h-1 mx-1", isActive ? "bg-primary" : "bg-zinc-500")}></div>
    ) : (
      <div className={twMerge("w-[32%]  h-1 mx-1", isActive ? "bg-primary" : "bg-zinc-500")}></div>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full mb-5 flex items-center justify-between flex-row  ">
        {step != 0 ? (
          <FontAwesomeIcon icon={faChevronRight} size="lg" color="white" className="cursor-pointer" onClick={onClick} />
        ) : (
          <div className="text-lg" />
        )}
        {/* <Icon className="w-7 h-7" /> */}
        <img src={pwoeredBy} className="w-40" />
        <div className="text-lg" />
      </div>

      <div className="flex flex-row items-center justify-between w-full">
        {activeProgressBar.map((isActive, index) => (
          <Bar key={index} isActive={isActive} />
        ))}
      </div>
    </div>
  );
};

export default ProgressBars;
