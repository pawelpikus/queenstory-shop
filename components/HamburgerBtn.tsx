import { Dispatch, SetStateAction } from "react";

type HamburgerBtnProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const HamburgerBtn = ({ open, setOpen }: HamburgerBtnProps) => {
  return (
    <button
      className="relative w-20 h-20 text-white bg-transparent focus:outline-none"
      onClick={() => setOpen(!open)}
    >
      <span className="sr-only">Open main menu</span>
      <div className="absolute translate-x-3.5">
        <span
          aria-hidden="true"
          className={`block absolute h-1 w-10 bg-current rounded-md transform transition duration-500 ease-in-out ${
            open ? "rotate-45" : "-translate-y-3"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute  h-1 w-10 bg-current rounded-md transform transition duration-500 ease-in-out ${
            open && "opacity-0"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-1 w-10 bg-current rounded-md transform  transition duration-500 ease-in-out ${
            open ? "-rotate-45" : "translate-y-3"
          }`}
        ></span>
      </div>
    </button>
  );
};

export default HamburgerBtn;
