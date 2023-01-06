import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import Container from "../Container";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-secondary shadow-sm shadow-gray-500">
      <Container className="p-2">
        <div className="flex justify-between items-center">
          <img src="./logo.png" alt="logo" className="h-10" />
          <ul className="flex items-center space-x-4">
            <li>
              <button className="bg-dark-subtle p-1 rounded">
                <BsFillSunFill className="text-secondary" size={24} />
              </button>
            </li>
            <li>
              <input
                type="text"
                className="border-2 border-dark-subtle p-1 rounded 
                bg-transparent text-xl 
                outline-none focus:border-white tranistion text-white"
                placeholder="Search..."
              />
            </li>
            <NavLink
              className="text-white font-semibold text-lg"
              to="/auth/signin"
            >
              Login
            </NavLink>
          </ul>
        </div>
      </Container>
    </div>
  );
};
export default Navbar;