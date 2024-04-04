/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import { useState } from "react";

/* ----------------------------------------------------------------------------------------------------- */
/*  @ BookAPIHandler : api calls
/* ----------------------------------------------------------------------------------------------------- */
const BookAPIHandler = () => {
  // eslint-disable-next-line no-unused-vars
  const [books, setBooks] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //Get Books From DB
  const getAllBooks = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/FakeDB.json");
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      setBooks(await response.json());
    } catch (err) {
      console.error("Error fetching books", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { books, getAllBooks, isLoading };
};

export default BookAPIHandler;
