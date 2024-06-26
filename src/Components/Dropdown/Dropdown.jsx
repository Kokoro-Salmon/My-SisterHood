import "./dropdown.css";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Dropdown = () => {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={handleClick}
      className={!click ? "dropdown-menu clicked" : "dropdown-menu active"}
    >
      <li>
        <NavLink to="/LegalResources" onClick={() => setClick(false)}>
          Legal Resources
        </NavLink>
      </li>
      <li>
        <NavLink to="/Contacts" onClick={() => setClick(false)}>
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/About" onClick={() => setClick(false)}>
          About My SisterHood
        </NavLink>
      </li>
      <li>
        <NavLink to="/Faqs" onClick={() => setClick(false)}>
          Faqs
        </NavLink>
      </li>
      <li>
        <a
          href="https://colab.research.google.com/drive/1dDdl7ux3ccOshyKM6_I4ihPk8gIgFwRm?usp=sharing"
          onClick={() => setClick(false)}
        >
          Govt. Data
        </a>
      </li>
    </ul>
  );
};

export default Dropdown;
