import { BsFillArrowRightCircleFill } from "react-icons/bs";
import aboutPng from "../assets/about.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh] font-extralight bg-[#F9FBF2] flex flex-col sm:flex-row justify-center items-center py-10 sm:py-3 md:py-0 space-y-4 sm:space-y-0">
      <div className="max-w-[50%] flex flex-col gap-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl">ABOUT US</h1>
        <p className="text-lg tracking-widest font-medium ">
          The only thing we're serious about is food.
        </p>
        <p className="tracking-widest leading-8 line-clamp-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          possimus optio adipisci dolores impedit illum iusto perferendis,
          laudantium quod accusamus consequuntur consectetur, tempore nulla
          error iure reiciendis dolorem assumenda. Necessitatibus fugit
          asperiores totam rem esse exercitationem iusto ipsum qui dolore ex,
          accusantium repellat mollitia repellendus.
        </p>

        <div>
          <button
            onClick={() => {navigate("/")}}
            className="rounded-full px-8 py-4 border hover:bg-yellow-500 hover:text-white cursor-pointer duration-500 flex items-center gap-2 font-medium text-sm animate-pulse"
          >
            <span>Explor Menu </span>
            <BsFillArrowRightCircleFill className="text-xl" />
          </button>
        </div>
      </div>
      <div>
        <img
          src={aboutPng}
          alt=""
          className="max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-cover overflow-hidden drop-shadow-[6px_8px_10px_rgba(0,0,0,0.2)]"
        />
      </div>
    </div>
  );
};

export default About;
