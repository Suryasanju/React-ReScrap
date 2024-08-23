import React, { useEffect, useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./userSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { uid, email, displayName, photoURL } = currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        setUser(currentUser);
      } else {
        dispatch(removeUser());
        setUser(null);
      }
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, [dispatch]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsCategoryOpen(true);
  };

  const handleMouseLeave = () => {
    setIsCategoryOpen(false);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        setUser(null);
        navigate("/sign-in");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <RiDeleteBin2Line className="text-white h-8 w-8" />
            <span className="ml-2 text-white text-lg font-semibold">
              ReScrap
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/pickup-request"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Pick Up Request
              </Link>
              <Link
                to="/price-list"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Price List
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Category
                </button>
                {isCategoryOpen && (
                  <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <Link
                      to="/team"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Our Team
                    </Link>
                    <Link
                      to="/charity"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Charity
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              {user ? (
                <>
                  <span className="text-gray-300 ml-4 text-sm font-medium">
                    {user.displayName}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md ml-4"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/sign-in"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md ml-4 text-sm"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/pickup-request"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Pick Up Request
            </Link>
            <Link
              to="/price-list"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Price List
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Category
              </button>
              {isCategoryOpen && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <Link
                    to="/team"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/charity"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Charity
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            {user ? (
              <>
                <span className="text-gray-300 ml-4 text-base font-medium">
                  {user.displayName}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md ml-4 block"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/sign-in"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md ml-4 block text-base"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
