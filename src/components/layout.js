import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
            {children}
          </div>

          <footer className="bg-blue-darker">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-xl mx-auto mx-auto p-6 md:p-8 text-sm">
              <div className="copyright text-white">
                &copy; 2019 Makoto Dejima
              </div>
              <div className="contacts w-48 mb-4 md:m-0 flex justify-between">
                <Link to="/" className="md:no-underline text-white">
                  Home
                </Link>

                <Link to="/about/" className="md:no-underline text-white">
                  About
                </Link>

                <Link to="/contact/" className="md:no-underline text-white">
                  Contact
                </Link>
              </div>
            </div>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
