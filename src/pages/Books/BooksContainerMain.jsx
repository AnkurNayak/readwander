/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import Cards from "../../components/Common/Cards";
import { useOutletContext } from "react-router-dom";

/* eslint-disable react/prop-types */
/* ----------------------------------------------------------------------------------------------------- */
/*  @Base : <BooksContainerMain /> 
/* ----------------------------------------------------------------------------------------------------- */
const BooksContainerMain = () => {
  const { books } = useOutletContext();
  const { CardsHorizontal } = Cards();

  if (books) {
    return (
      <div className="md:px-24 md:py-12 p-6">
        <h1 className="font-bold md:text-4xl text-3xl mb-4">Our Collections</h1>
        <div className="grid lg:grid-cols-2 gap-x-2 gap-y-2">
          {books.map((book, index) => (
            <CardsHorizontal
              key={index}
              image={book.cover}
              title={book.title}
              desc={book.summary}
              author={book.author}
              id={book.id}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default BooksContainerMain;
