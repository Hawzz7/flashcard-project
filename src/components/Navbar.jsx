import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex  items-center justify-center sm:justify-start sm:px-[180px]">
        <span className="pt-4 pb-2 text-2xl font-bold">Create Flashcard</span>
      </div>
      <div className="flex gap-4 items-center justify-center sm:justify-start sm:px-[182px]">
        <Link to="/createflashcard" className="text-sm focus:underline hover:text-red-700 focus:text-red-700 decoration-red-700 focus:decoration-4 decoration-4 underline-offset-4">
          Create New
        </Link>

        <Link to="/myflashcard" className="text-sm focus:underline hover:text-red-700 focus:text-red-700 decoration-red-700 focus:decoration-4 decoration-4 underline-offset-4">
         My Flashcard
        </Link>
      </div>
      <div className="h-[3px] mx-[180px] mb-2 bg-stone-600">
        <hr />
      </div>
    </div>
  );
}

export default Navbar;
