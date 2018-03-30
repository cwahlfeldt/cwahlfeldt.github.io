import React from 'react';
import Link from 'gatsby-link';

const Nav = () => (
  <nav
    className={`
      flex flex-row
      ph4 justify-center
      items-center vh-100
    `}
  >
    <h1>
      <Link
        to="/"
        className={`
          ttu tracked title
          link near-black dim
        `}
      >
        Chris Wahlfeldt
      </Link>
    </h1>
  </nav>
);

export default Nav;
