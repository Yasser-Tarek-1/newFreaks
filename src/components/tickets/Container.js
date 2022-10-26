import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseStep , reset } from "../../redux/slices/ticketSlice";

const Container =({ children, ...props })=> {
  const language = useSelector((state) => state.language.language);
  const step = useSelector((state) => state.ticket.step);
  const dispatch = useDispatch();
  const handleDecrement = () => {
    dispatch(reset());
  };

  let { tailwindClasses } = props;
  return (
    <div
      id="stepMother"
      className={`w-full h-full max-h-max max-w-[1920px] relative bg-purple text-white  rounded-2xl drop-shadow-2xl shadow-xl   ${tailwindClasses}`}
    >
      <button
        onClick={handleDecrement}
        className={`absolute top-5 start-4 ${step !== 2 && "hidden"}`}
      >
        {language === "ar" ? (
          <svg className="w-3" viewBox="0 0 14.183 24.691">
            <path
              id="Path_399"
              data-name="Path 399"
              d="M2,13,13,3,24,13"
              transform="translate(14.48 -0.655) rotate(90)"
              fill="none"
              stroke="#fff"
              strokeWidth="4"
            />
          </svg>
        ) : (
          <svg className="w-2" viewBox="0 0 14.183 24.691">
            <path
              id="Path_400"
              data-name="Path 400"
              d="M2,13,13,3,24,13"
              transform="translate(-0.297 25.345) rotate(-90)"
              fill="none"
              stroke="#fff"
              strokeWidth="4"
            />
          </svg>
        )}
      </button>
      {children}
    </div>
  );
}

export default Container