import { useNavigate } from "react-router-dom";
import img1 from "../../assets/team_member_1.png";
import img2 from "../../assets/team_member_2.png";
import img3 from "../../assets/team_member_3.png";
import img4 from "../../assets/team_member_4.png";

const team = [
  {
    id: 1,
    image: img1,
    name: "JOHNATHAN TYLER",
    designation: "Founder & Head Chef",
  },
  {
    id: 2,
    image: img2,
    name: "WADE WARREN",
    designation: "Sous Chef",
  },
  {
    id: 3,
    image: img3,
    name: "JHON DOE",
    designation: "Fast Food Chef",
  },
  {
    id: 4,
    image: img4,
    name: "ALEX COAL",
    designation: "Senior Chef",
  },
];

const Team = () => {
  const Navigate = useNavigate();
  return (
    <div className="py-3">
      <div className="mx-auto text-center py-8 space-y-3">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extralight">
          OUR TEAM
        </h1>
        <p className="font-extralight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
          perferendis laborum.
        </p>
      </div>
      <ul className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4">
        {team.map((item) => (
          <li key={item.id} className="flex flex-col items-center">
            <div className="py-4">
              <img
                onClick={() => Navigate("/")}
                src={item.image}
                alt=""
                className="w-[150px] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] "
              />
            </div>
            <h1 className="text-xl font-medium">{item.name} </h1>
            <p className="font-light">{item.designation} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
