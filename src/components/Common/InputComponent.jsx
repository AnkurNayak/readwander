/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
/* ----------------------------------------------------------------------------------------------------- */
/*  @ <InputComponent /> 
/* ----------------------------------------------------------------------------------------------------- */

const InputComponent = ({
  icon,
  placeHolder,
  input,
  setInput,
  filteredBooks,
}) => {
  return (
    <div className="relative">
      <div className="w-full flex items-center">
        <span className="absolute left-2">{icon}</span>
        <input
          type="text"
          className="w-full outline-none rounded-md bg-gray-200 border-black border-opacity-30 pl-8 py-2 text-lg pr-2"
          placeholder={placeHolder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {filteredBooks && (
        <div className="absolute left-0 mt-2 w-full bg-white border rounded-md border-gray-300 shadow-lg z-20">
          <div className="divide-y divide-gray-200 flex flex-col gap-2">
            {filteredBooks.map((book) => (
              <Link
                to={`/books/${book.title}`}
                key={book.id}
                className="px-4 py-2"
                onClick={() => setInput("")}
              >
                {book.title} - {book.author}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InputComponent;
