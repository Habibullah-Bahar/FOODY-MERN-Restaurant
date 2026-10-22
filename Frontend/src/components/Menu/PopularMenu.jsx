import dinner1 from "../../assets/dinner1.jpeg";
import dinner2 from "../../assets/dinner2.png";
import dinner3 from "../../assets/breakfast1.png";
import dinner4 from "../../assets/dinner3.png";
import dinner5 from "../../assets/lunch1.png";
import dinner6 from "../../assets/dinner4.png";
import dinner7 from "../../assets/dinner5.png";
import dinner8 from "../../assets/dinner6.png";
import { Link } from "react-router-dom";

const dishes = [
  {
    id: 1,
    image: dinner1,
    title: "ROASTED LAMB RUMP",
    category: "Dinner",
  },
  {
    id: 2,
    image: dinner2,
    title: "CITRUS CURED SALMON",
    category: "Dinner",
  },
  {
    id: 3,
    image: dinner3,
    title: "PAN SEARED SEA BASS",
    category: "Breakfast",
  },
  {
    id: 4,
    image: dinner4,
    title: "STUFFED STRAWBERRY",
    category: "Dinner",
  },
  {
    id: 5,
    image: dinner5,
    title: "BEEF BURGER MEAL",
    category: "Lunch",
  },
  {
    id: 6,
    image: dinner6,
    title: "MUSSELS SOUP",
    category: "Dinner",
  },
  {
    id: 7,
    image: dinner7,
    title: "ITALIAN SPAGHETTI",
    category: "Dinner",
  },
  {
    id: 8,
    image: dinner8,
    title: "GRILLED FISH",
    category: "Dinner",
  },
];
const PopularMenu = () => {
  return (
    <div className="font-extralight py-8">
      <div className="flex flex-col text-center items-center space-y-4 py-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl">POPULAR DISHES</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto
          dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur
          eius et recusandae veritatis. Quasi, et molestias!
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 space-y-6">
        {dishes.map((item) => (
          <li key={item.id} className="relative">
            <h1 className="z-10 px-3 py-2 rounded-full bg-gradient-to-b from-gray-700 to-gray-500 text-white w-[80px] text-center absolute top-2 left-2  font-medium ">
              {item.category}{" "}
            </h1>
            <div >
              <Link to="/reservation"  className="transition-all duration-300">
                <img
                  className="hover:scale-105 duration-500  "
                  src={item.image}
                  alt=""
                />
              </Link>
            </div>
            <h1 className="font-medium text-xl pt-4">{item.title} </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMenu;
