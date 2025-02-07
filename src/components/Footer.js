import React from "react";

function Footer() {
  return (
    <>
      <div className="container">
        <footer
          style={{ borderTopColor: "rgb(223, 212, 245)" }}
          className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
        >
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 exo">© 2024 Wall-E, AA</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
