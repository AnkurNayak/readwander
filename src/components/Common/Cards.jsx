/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

/* eslint-disable react/prop-types */
/* ----------------------------------------------------------------------------------------------------- */
/*  @ <Cards /> : HomePage : BooksPage 
/* ----------------------------------------------------------------------------------------------------- */
const Cards = () => {
  // Vertical Design
  const CardsVertical = ({ id, image, title, desc, author }) => {
    return (
      <div className="p-4 border-2 rounded-lg flex flex-col gap-2 bg-white">
        <img
          src={image}
          alt={title}
          className="max-h-40 min-h-40 object-cover rounded-lg"
        />
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="font-medium">{author}</p>
        <p className="line-clamp-1 text-gray-500">{desc}</p>
        <span>
          <ProgressBar id={id} />
        </span>
      </div>
    );
  };

  // Horizontal Design
  const CardsHorizontal = ({ image, title, desc, author, id }) => {
    return (
      <div className="p-4 border-2 rounded-lg grid grid-cols-2 gap-x-4 bg-white">
        <img
          src={image}
          alt={title}
          className="max-h-52 min-h-52 object-cover rounded-lg"
        />
        <div className="flex flex-1 flex-col gap-2">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="font-semibold">{author}</p>
          <p className="font-medium text-gray-500 line-clamp-2">{desc}</p>
          <ProgressBar id={id} />
          <Link
            to={`/books/${title}`}
            className="bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] max-w-max rounded-lg px-8 py-2 mt-auto text-white"
          >
            Read
          </Link>
        </div>
      </div>
    );
  };

  return { CardsHorizontal, CardsVertical };
};

export default Cards;
