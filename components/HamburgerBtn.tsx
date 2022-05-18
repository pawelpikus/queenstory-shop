import { Dispatch, SetStateAction } from "react";

type HamburgerBtnProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const HamburgerBtn = ({ open, setOpen }: HamburgerBtnProps) => {
  return (
    <button
      className="relative text-white bg-transparent w-14 h-14 focus:outline-none"
      onClick={() => setOpen(!open)}
    >
      <span className="sr-only">Otwórz menu główne</span>
      <div className="absolute translate-x-3.5">
        <span
          aria-hidden="true"
          className={`block absolute h-1 w-8 bg-current rounded-md transform transition duration-500 ease-in-out ${
            open ? "rotate-45" : "-translate-y-2"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute  h-1 w-8 bg-current rounded-md transform transition duration-500 ease-in-out ${
            open && "opacity-0"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-1 w-8 bg-current rounded-md transform  transition duration-500 ease-in-out ${
            open ? "-rotate-45" : "translate-y-2"
          }`}
        ></span>
      </div>
    </button>
  );
};

export default HamburgerBtn;
