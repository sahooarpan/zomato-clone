import React from "react";
const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <div className="row">
            <div className="col-md-12">
              <div className="footer p-5 mt-4 text-center bg-secondary text-light">
                Developed By:
                <span className="text-warning font-weight-normal">
                  Arpan Sahoo
                </span>
                , Using <i className="fab fa-react" /> React JS &amp; Redux JS
                integrated with external Zomato API
                <a
                  href="http://www.omdbapi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OMDB
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
