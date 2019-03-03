import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import md from "../images/md.svg";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
        <Link to="/" className="w-16 h-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 25"
            fill="#3d4852"
            width="64px"
          >
            <title>md</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  class="cls-1"
                  d="M32.06,12.41a2,2,0,0,0-.91.8,2.26,2.26,0,0,0-.33,1.23,2.07,2.07,0,0,0,.29,1.1,2.22,2.22,0,0,0,.8.78,3.43,3.43,0,0,0,.93.34,4.59,4.59,0,0,0,1.06.12h.15v-1c0-.59,0-1.4,0-2.46V12a7.37,7.37,0,0,0-1.07.08A3.38,3.38,0,0,0,32.06,12.41Z"
                />
                <path
                  class="cls-1"
                  d="M0,0V25H50V0ZM24.24,18.38c0-.24,0-.61,0-1.12s0-1.08,0-1.7c0-.24,0-.61,0-1.1s0-.88,0-1.15A1.76,1.76,0,0,0,24,12.23a1,1,0,0,0-.81-.32,2.75,2.75,0,0,0-.83.16,5.7,5.7,0,0,0-1,.44v.41c0,.41,0,.83,0,1.25s0,.79,0,1.12c0,.7,0,1.34,0,1.93s0,1,0,1.16H18.91c0-.14,0-.46,0-1s0-1.11,0-1.84c0-.26,0-.64,0-1.13s0-.87,0-1.12a4.55,4.55,0,0,0,0-.53,1.33,1.33,0,0,0-.14-.45,1,1,0,0,0-.31-.33,1.24,1.24,0,0,0-.58-.11,2.26,2.26,0,0,0-.84.2,8.59,8.59,0,0,0-1,.48c0,.06,0,.39,0,1s0,1.09,0,1.43c0,.58,0,1.23,0,2s0,1.19,0,1.4H13.58c0-.27,0-.71,0-1.34s0-1.51,0-2.65c0-.47,0-1.07,0-1.8s0-1.55,0-2.46H16v.8h0a8.7,8.7,0,0,1,1.34-.67,4.23,4.23,0,0,1,1.56-.35,2.73,2.73,0,0,1,1.29.29A2.07,2.07,0,0,1,21,11h0a8,8,0,0,1,1.61-.76,4.84,4.84,0,0,1,1.6-.31,2.37,2.37,0,0,1,1.81.69,2.5,2.5,0,0,1,.66,1.81c0,.62,0,1.13,0,1.53s0,.8,0,1.18c0,.73,0,1.39,0,2s0,1,0,1.26ZM36.4,16.13c0,.93,0,1.7,0,2.32H35.21a20.32,20.32,0,0,1-2.76-.15,6.14,6.14,0,0,1-1.83-.56,4.08,4.08,0,0,1-1.7-1.41,3.53,3.53,0,0,1-.58-2,3.66,3.66,0,0,1,.63-2.1,4.11,4.11,0,0,1,1.91-1.46,6.41,6.41,0,0,1,1.48-.44,11,11,0,0,1,1.6-.18l0-3.62h2.48c0,.15,0,.84,0,2.06s0,2.6,0,4.14C36.39,14.07,36.4,15.2,36.4,16.13Z"
                />
              </g>
            </g>
          </svg>
          {/* <span className="font-bold text-xl tracking-tight">{siteTitle}</span> */}
        </Link>

        <button
          className="block md:hidden border border-black flex items-center px-3 py-2 rounded text-black"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-sm">
            <Link
              to="/work/"
              className="block mt-4 md:inline-block md:mt-0 mr-8 no-underline text-black"
            >
              Work
            </Link>

            <Link
              to="/about/"
              className="block md:inline-block mt-4 md:mt-0 mr-8 no-underline text-black"
            >
              About
            </Link>

            <Link
              to="/contact/"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-black"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
