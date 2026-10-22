import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";
import { useState } from "react";

export const NavLinks = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "ABOUT US",
    link: "/about",
  },
  {
    id: 3,
    name: "SERVICES",
    link: "/services",
  },
  {
    id: 4,
    name: "TEAM",
    link: "/team",
  },
  {
    id: 5,
    name: "RESERVATION",
    link: "/reservation",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className=" px-5 py-6 flex items-center justify-between bg-gradient-to-l from-gray-100 to-yellow-100">
        <a href="/" className="tracking-wide text-3xl inline-block">
          FOODY
        </a>
        <ul className="hidden md:flex justify-center items-center gap-6">
          {NavLinks.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className="hover:text-gray-500 tracking-widest text-gray-700 text-lg"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden sm:block">
         <Link to="/dishes">
          <button
           className="rounded-full px-5 py-1 border text-lg hover:bg-yellow-500 hover:text-white cursor-pointer duration-500 uppercase">
            Our Menu
          </button>
         </Link>
        </div>
        <div onClick={() => setShowMenu(!showMenu)} className="md:hidden">
          <GiHamburgerMenu className="text-2xl " />
        </div>
      </div>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu}/>
    </div>
  );
};

export default Navbar;
