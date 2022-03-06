import React from "react";
import * as mdb from "mdb-ui-kit";

function SortSearch() {
  return (
    <div className="shadow-0 sortsearch">
      <input type="text" className="searchinp" placeholder="Search..."></input>
      <button
        type="button"
        className="btn btn-link dropdown-toggle"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        Sort By
      </button>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" href="#">
            State
          </button>
        </li>
        <li>
          <button className="dropdown-item" href="#">
            Parks
          </button>
        </li>
        <li>
          <button className="dropdown-item" href="#">
            Activities
          </button>
        </li>
        <li>
          <button className="dropdown-item" href="#">
            Campgrounds
          </button>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button className="dropdown-item" href="#">
            Favorites
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SortSearch;
