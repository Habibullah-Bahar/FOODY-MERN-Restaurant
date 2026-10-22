import { Link } from "react-router-dom";
import { NavLinks } from "./Navbar.jsx";

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      aria-hidden={!showMenu}
      className={`w-full z-50 bg-gray-300 shadow-md overflow-hidden
        transition-all duration-500 ease-in-out
        ${showMenu ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}
    >
      <ul className="flex flex-col items-center gap-4 py-6">
        {NavLinks.map((item) => (
          <li key={item.id}>
            <Link
              to={item.link}
              onClick={() => setShowMenu(false)}
              className="text-lg hover:text-yellow-500 duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li>
          <button className="rounded-full px-5 py-1 border text-lg hover:bg-yellow-500 hover:text-white cursor-pointer duration-500 uppercase">
            Our Menu
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;