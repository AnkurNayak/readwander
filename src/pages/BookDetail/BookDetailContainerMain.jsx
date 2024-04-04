/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import FancyButton from "../../components/Common/FancyButton";

/* ----------------------------------------------------------------------------------------------------- */
/*  @Base : <BookDetailContainerMain />
/* ----------------------------------------------------------------------------------------------------- */
const BookDetailContainerMain = () => {
  const { books } = useOutletContext();
  const { bookName } = useParams();
  const [book, setBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (books) {
      const matchedBook = books.find((b) => b.title === bookName);
      setBook(matchedBook);
    }
  }, [bookName, books]);

  useEffect(() => {
    // Check if book is in localStorage
    const storedBookString = localStorage.getItem(book?.id);
    if (storedBookString) {
      const storedBookDetails = JSON.parse(storedBookString);
      setCurrentPage(storedBookDetails.currentPage);
    }
  }, [book]);

  useEffect(() => {
    if (book) {
      const currentTime = new Date().toLocaleString();
      const storedBookDetails = {
        book: book.title,
        currentPage,
        totalPages: book.content.length,
        id: book.id,
        lastOpened: currentTime,
      };
      localStorage.setItem(book.id, JSON.stringify(storedBookDetails));
    }
  }, [book, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, book.content.length - 1)
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <div className="md:px-24 md:py-12 p-6">
      {book && (
        <div className="border-2 rounded-2xl p-6 sm:p-12 flex flex-col gap-4 shadow-xl bg-white">
          {currentPage === 0 && ( // Conditionally render image, title, and author only on first page
            <img
              src={book.cover}
              alt={book.title}
              className="max-h-96 object-cover"
            />
          )}
          {currentPage === 0 && ( // Conditionally render title and author only on first page
            <>
              <h1 className="md:text-4xl font-bold">{book.title}</h1>
              <p className="text-2xl font-medium">{book.author}</p>
            </>
          )}
          <p className="text-lg">{book.content[currentPage]}</p>
          <p className="text-sm text-gray-500 mt-2">
            Page {currentPage + 1} of {book.content.length}
          </p>
          <div className="flex justify-between mt-4">
            <FancyButton onClick={handlePrevPage} disabled={currentPage === 0}>
              Previous
            </FancyButton>
            <FancyButton
              onClick={handleNextPage}
              disabled={currentPage === book.content.length - 1}
            >
              Next
            </FancyButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetailContainerMain;
