import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <nav className="bg-[#1c1917] p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-[#594a3c] font-bold text-lg">Meu Site</div>
            <div className="sm:hidden">
              <button
                type="button"
                className="text-white focus:outline-none focus:text-white"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-[#594a3c]"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H5ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H5Z"
                      className="text-[#594a3c]"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div className="hidden sm:flex space-x-4">
              <NavLink
                exact
                to="/"
                activeClassName="active-link"
                className="text-white hover:text-[#594a3c]"
              >
                Home
              </NavLink>
              <NavLink
                to="/link"
                activeClassName="active-link"
                className="text-white"
              >
                Sobre
              </NavLink>
              <NavLink
                to="/dd"
                activeClassName="active-link"
                className="text-white"
              >
                Contato
              </NavLink>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <a href="#" className="block text-white p-2 text-[#594a3c] ">
              Home
            </a>
            <a href="/link" className="block text-white p-2 text-[#594a3c]">
              Sobre
            </a>
            <a href="/k" className="block text-white p-2 text-[#594a3c]">
              Contato
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
