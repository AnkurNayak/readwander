/* ----------------------------------------------------------------------------------------------------- */
/*  @ Imports.
/* ----------------------------------------------------------------------------------------------------- */
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/Common/LoadingScreen";
/* ----------------------------------------------------------------------------------------------------- */
/*  @ Lazy Load Pages.
/* ----------------------------------------------------------------------------------------------------- */
const Homepage = lazy(() => import("./pages/Homepage/HomepageContainerMain"));
const BooksPage = lazy(() => import("./pages/Books/BooksContainerMain"));
const BookDetailPage = lazy(() =>
  import("./pages/BookDetail/BookDetailContainerMain")
);
const DocumentationPage = lazy(() =>
  import("./pages/Documentation/Documentation")
);
const ErrorPage = lazy(() => import("./components/Common/ErrorPage"));
const Layout = lazy(() => import("./Layout"));

/* ----------------------------------------------------------------------------------------------------- */
/*  @ <App />.
/* ----------------------------------------------------------------------------------------------------- */
const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="books" element={<BooksPage />} />
            <Route path="/books/:bookName" element={<BookDetailPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
