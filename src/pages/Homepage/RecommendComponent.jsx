/* eslint-disable react/prop-types */
/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import { Link } from "react-router-dom";
import Cards from "../../components/Common/Cards";

/* ----------------------------------------------------------------------------------------------------- */
/*  @ <Recommend /> 
/* ----------------------------------------------------------------------------------------------------- */
const Recommend = ({ recommendBooks }) => {
  const { CardsVertical } = Cards();
  const randomIndex = Math.floor(Math.random() * recommendBooks.length);
  const randomBook = recommendBooks[randomIndex];

  return (
    <div className="md:px-24 p-6">
      <h1 className="font-bold text-2xl mb-4">Recommend for you</h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2">
        <Link to={`/books/${randomBook.title}`}>
          <CardsVertical
            image={randomBook.cover}
            title={randomBook.title}
            author={randomBook.author}
            id={randomBook.id}
            desc={randomBook.summary}
          />
        </Link>
      </div>
    </div>
  );
};

export default Recommend;
