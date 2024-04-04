/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import InputComponent from "../../components/Common/InputComponent";
import { useState } from "react";
import { RiMenuAddLine } from "react-icons/ri";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";

/* ----------------------------------------------------------------------------------------------------- */
/*  @ <NavigationMain /> : Header and Sidenav.
/* ----------------------------------------------------------------------------------------------------- */
const NavigationMain = ({ input, setInput, filteredBooks }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="fixed top-0 w-full bg-white z-50">
      <div className="flex justify-between items-center min-h-16 shadow-lg md:px-8 px-4">
        <div className="flex items-center flex-1">
          <h1 className="text-3xl font-bold bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] inline-block text-transparent bg-clip-text">
            ReadWander
          </h1>
          <div className="hidden lg:flex gap-8 w-full justify-center">
            <NavigationTabs />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="hidden sm:flex gap-4 items-center min-w-96">
            <button className="hidden md:flex min-w-max text-green-600 border-green-600 border tracking-widest rounded-md px-4 py-2 uppercase text-xs font-bold">
              start trial
            </button>
            <InputComponent
              icon={<HiMiniMagnifyingGlass size={20} />}
              placeHolder="Search For a Book"
              input={input}
              setInput={setInput}
              filteredBooks={filteredBooks}
            />
          </div>
          <span className="flex items-center">
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="lg:hidden flex"
            >
              <RiMenuAddLine size={32} color="grey" />
            </button>
          </span>
        </div>
      </div>
      <div
        className={`lg:hidden fixed right-0 h-full bg-gray-100 w-52 transform transition-transform ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavigationTabs />
      </div>
    </div>
  );
};

/* ----------------------------------------------------------------------------------------------------- */
/*  @ <NavigationTabs /> Navigation tabs : Link to other pages
/* ----------------------------------------------------------------------------------------------------- */
const NavigationTabs = () => {
  return (
    <div className="flex font-bold max-lg:flex-col text-lg">
      <div className="flex lg:justify-center items-center cursor-pointer">
        <Link to="/" className="hover:bg-gray-200 px-6 py-3 rounded-md w-full">
          Home
        </Link>
      </div>
      <div className="flex lg:justify-center items-center cursor-pointer">
        <Link
          to="/books"
          className="hover:bg-gray-200 px-6 py-3 rounded-md w-full"
        >
          Books
        </Link>
      </div>
      <div className="flex lg:justify-center items-center cursor-pointer">
        <Link
          to="/documentation"
          className="hover:bg-gray-200 px-6 py-3 rounded-md w-full"
        >
          Documentation
        </Link>
      </div>
    </div>
  );
};

export default NavigationMain;
