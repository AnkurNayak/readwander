/* eslint-disable react/prop-types */
/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import { Link } from "react-router-dom";
import Cards from "../../components/Common/Cards";

/* ----------------------------------------------------------------------------------------------------- */
/*  @ <ContinueReading /> 
/* ----------------------------------------------------------------------------------------------------- */
const ContinueReading = ({ continueBooks }) => {
  const { CardsVertical } = Cards();

  return (
    <div className="md:p-24 p-6">
      <h1 className="font-bold text-2xl mb-4">Continue Reading</h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-x-2 gap-y-2">
        {continueBooks.slice(0, 4).map((book, index) => (
          <Link to={`/books/${book.title}`} key={index}>
            <CardsVertical
              id={book.id}
              image={book.cover}
              title={book.title}
              author={book.author}
              desc={book.summary}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueReading;
