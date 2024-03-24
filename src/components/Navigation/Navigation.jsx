import React from "react";
import nav from "../../data/nav.json";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

export const Navigation = ({ click, className }) => {
  return (
    <>
      {nav.map((item) => (
        <li className={className} key={item.id}>
          <Link
            onClick={click}
            href="/"
            to={item.name}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
};

Navigation.propTypes = {
  click: PropTypes.func,
  className: PropTypes.string,
};
