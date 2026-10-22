import quality_food from "../../assets/quality_food.svg";
import super_taste from "../../assets/super_taste.svg";
import fast_delivery from "../../assets/fast_delivery.svg";
import { useNavigate } from "react-router-dom";

const ourQualities = [
  {
    id: 1,
    image: quality_food,
    title: "QUALITY FOOD",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus officia qui repellat.",
  },
  {
    id: 2,
    image: super_taste,
    title: "SUPER TASTE",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing sit amet elit. Sit voluptates quaerat pariatur.",
  },
  {
    id: 3,
    image: fast_delivery,
    title: "FAST DELIVERY",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus officia qui repellat.",
  },
];
const Qualities = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul
        onClick={() => navigate("/")}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-16 px-16 w-full py-24 text-center"
      >
        {ourQualities.map((item) => (
          <li
            key={item.id}
            className="mx-auto flex  flex-col items-center gap-3 max-w-[150px] text-center"
          >
            <div>
              <img src={item.image} alt="" />
            </div>
            <h1 className="font-medium text-xl">{item.title} </h1>
            <p className="font-light text-center">{item.description} </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Qualities;
