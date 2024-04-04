/* eslint-disable react/prop-types */
/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import { useEffect } from "react";
import { useState } from "react";
import ProgressBar from "../../components/Common/ProgressBar";
import { CiPlay1 } from "react-icons/ci";
import { Link } from "react-router-dom";

/* ----------------------------------------------------------------------------------------------------- */
/*  @ <LatestReadingComponent /> 
/* ----------------------------------------------------------------------------------------------------- */
const LatestReadingComponent = ({ latestBook }) => {
  const [localStorageLatestBook, setLocalStorageLatestBook] = useState(null);

  useEffect(() => {
    let latestItem = null;

    // Get all keys from localStorage
    const localStorageKeys = Object.keys(localStorage);

    // Iterate over keys in reverse order to find the latest item with lastOpened property
    for (let i = localStorageKeys.length - 1; i >= 0; i--) {
      const key = localStorageKeys[i];
      const item = JSON.parse(localStorage.getItem(key));

      // Check if item has lastOpened property
      if (item && item.lastOpened) {
        // Found an item with lastOpened property
        latestItem = { key, ...item };
        break; // Stop iterating
      }
    }

    // If latestItem is still null, set it to the second-to-last item
    if (!latestItem && localStorageKeys.length > 1) {
      const secondToLastKey = localStorageKeys[localStorageKeys.length - 2];
      const secondToLastItem = JSON.parse(
        localStorage.getItem(secondToLastKey)
      );
      if (secondToLastItem && secondToLastItem.lastOpened) {
        latestItem = { key: secondToLastKey, ...secondToLastItem };
      }
    }

    // Process latestItem if found
    if (latestItem) {
      const recentBook = latestBook.find((book) => book.id === latestItem.id);
      setLocalStorageLatestBook({
        recentBook,
        currPage: latestItem.currentPage,
      });
    }
  }, []);
  // console.log(localStorageLatestBook);
  return (
    <div className="md:px-24 p-6">
      <h1 className="font-bold text-2xl mb-4">Pick up where you left off</h1>
      <div className="grid lg:grid-cols-2 border border-gray-300 rounded-lg p-3 gap-x-8 gap-y-4 bg-white">
        {(localStorageLatestBook
          ? localStorageLatestBook
          : latestBook.find((book) => book.id === 1)) && (
          <>
            <img
              src={
                localStorageLatestBook
                  ? localStorageLatestBook.recentBook.cover
                  : latestBook[0].cover
              }
              alt="book-1"
              className="rounded-lg max-h-80 object-cover"
            />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold">
                  {localStorageLatestBook
                    ? localStorageLatestBook.recentBook.author
                    : latestBook[0].author}{" "}
                  - Lesson{" "}
                  {localStorageLatestBook
                    ? localStorageLatestBook.currPage + 1
                    : 1}{" "}
                  of{" "}
                  {localStorageLatestBook
                    ? localStorageLatestBook.recentBook.pages
                    : latestBook[0].pages}
                </p>
                <h1 className="text-3xl font-bold">
                  {localStorageLatestBook
                    ? localStorageLatestBook.recentBook.title
                    : latestBook[0].title}
                </h1>
                <p className="text-lg font-normal text-gray-500">
                  {localStorageLatestBook
                    ? localStorageLatestBook.recentBook.summary
                    : latestBook[0].summary}
                </p>
              </div>
              <Link
                to={`/books/${
                  localStorageLatestBook
                    ? localStorageLatestBook.recentBook.title
                    : latestBook[0].title
                }`}
                className="bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] max-w-max rounded-lg px-8 py-2 mt-auto text-white flex items-center justify-center gap-4 text-xl"
              >
                Resume <CiPlay1 size={24} />
              </Link>
              <ProgressBar
                id={
                  localStorageLatestBook
                    ? localStorageLatestBook.recentBook.id
                    : latestBook[0].id
                }
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LatestReadingComponent;
