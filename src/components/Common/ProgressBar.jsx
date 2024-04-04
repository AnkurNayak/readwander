/* ----------------------------------------------------------------------------------------------------- */
/*  @ imports.
/* ----------------------------------------------------------------------------------------------------- */
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
/* ----------------------------------------------------------------------------------------------------- */
/*  @ <ProgressBar /> : Use in cards
/* ----------------------------------------------------------------------------------------------------- */
const ProgressBar = ({ id }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const storedBookDetails = JSON.parse(localStorage.getItem(id));
    if (storedBookDetails) {
      setCurrentPage(storedBookDetails.currentPage);
      setTotalPages(storedBookDetails.totalPages);
    }
  }, [id]);

  const progressPercentage =
    totalPages !== 0 ? ((currentPage + 1) / totalPages) * 100 : 0;

  if (id) {
    return (
      <div className="bg-gray-300 rounded-full w-full h-1 mt-8">
        <div
          className="h-full rounded-full bg-blue-500 relative"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    );
  }
};

export default ProgressBar;
