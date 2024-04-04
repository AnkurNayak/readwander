/* eslint-disable react/prop-types */
/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import Cards from "../../components/Common/Cards";

/* ----------------------------------------------------------------------------------------------------- */
/*  @ <Featured /> 
/* ----------------------------------------------------------------------------------------------------- */
const Featured = ({ featuredBooks }) => {
  const { CardsHorizontal } = Cards();

  return (
    <div className="md:px-24 p-6">
      <h1 className="font-bold text-2xl mb-4">Featured</h1>
      <div className="grid lg:grid-cols-2 gap-x-2 gap-y-2">
        {featuredBooks.slice(0, 2).map((book, index) => (
          <CardsHorizontal
            key={index}
            image={book.cover}
            title={book.title}
            desc={book.summary}
            author={book.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
