import { useState } from "react";
import LinkButton from "./commonComponents/LinkButton";

const BoxSelect = () => {
  const [activeBoxes, setActiveBoxes] = useState([]);
  const [clickorder, setClickorder] = useState([]);
  const [isReversing, setIsReversing] = useState(false);

  const handleClick = (index) => {
    // prevent re-click & clicks during reverse
    if (activeBoxes.includes(index) || isReversing) return;

    const updatedActiveBoxes = [...activeBoxes, index];
    const updatedorder = [...clickorder, index];

    setActiveBoxes(updatedActiveBoxes);
    setClickorder(updatedorder);

    //when all boxes are clicked
    if (updatedActiveBoxes.length === 9) {
      setIsReversing(true);
      reverseBoxes(updatedorder);
    }
  };
  const reverseBoxes = (order) => {
    order
      .slice()
      .reverse()
      .forEach((boxIndex, i) => {
        setTimeout(
          () => {
            setActiveBoxes((prev) => prev.filter((item) => item !== boxIndex));
            // reset state after all boxes are reversed
            if (i === order.length - 1) {
              setClickorder([]);
              setIsReversing(false);
            }
          },
          (i + 1) * 1000,
        );
      });
  };
  return (
    <div>
      <div className="mb-5">
        <h1 className="mb-4">3*3 Matrix Box</h1>
        <div className="flex justify-center gap-2 items-center bg-gray-100">
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`w-24 h-24 border-2 border-black cursor-pointer transition-all duration-200 ${activeBoxes.includes(index) ? "bg-green-500" : "bg-white"}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <LinkButton to="/box-select-code" className="my-2" />
    </div>
  );
};

export default BoxSelect;
