/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import { Outlet } from "react-router-dom";
import NavigationMain from "./pages/Navigation/NavigationMain";
import InputComponent from "./components/Common/InputComponent";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useEffect, useState } from "react";
import BookAPIHandler from "./services/BookApiHandler";
/* ----------------------------------------------------------------------------------------------------- */
/*  @ Base : <Layout />
/* ----------------------------------------------------------------------------------------------------- */
const Layout = () => {
  const { books, getAllBooks } = BookAPIHandler();
  const [searchInput, setSearchInput] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(null);

  useEffect(() => {
    getAllBooks();
  }, []);

  useEffect(() => {
    // Set Filtered Books based on SearchInput
    if (searchInput.length > 2 && books) {
      const filtered = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          book.author.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks("");
    }
  }, [searchInput, books]);

  // console.log(filteredBooks);
  return (
    <div>
      <NavigationMain
        input={searchInput}
        setInput={setSearchInput}
        filteredBooks={filteredBooks}
      />
      <div className="pt-16 bg-slate-200">
        <div className="px-4 sm:hidden mt-4">
          <InputComponent
            icon={<HiMiniMagnifyingGlass size={20} />}
            placeHolder="Search For a Book"
            input={searchInput}
            setInput={setSearchInput}
            filteredBooks={filteredBooks}
          />
        </div>
        <Outlet context={{ books }} />
      </div>
    </div>
  );
};

export default Layout;
