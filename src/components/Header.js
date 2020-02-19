import React from "react";
const header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-danger justify-content-between">
        <a class="navbar-brand" href="#">
          <i className="fas fa-hamburger mr-1"></i>
          Zomato
        </a>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default header;
