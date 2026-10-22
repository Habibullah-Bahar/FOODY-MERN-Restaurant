import { useNavigate } from "react-router-dom";
import notImage from ".././/assets/notFound.svg";
import { FaArrowCircleRight } from "react-icons/fa";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center flex-col justify-center w-full h-screen space-y-3">
        <div>
          <img src={notImage} alt="" className="max-w-[300px] pb-6" />
        </div>
        <h1 className="uppercase font-medium text-2xl sm:text-3xl md:text-4xl">
          {" "}
          looks like you're lost{" "}
        </h1>
        <p className="font-extralight text-gray-500 ">
          We can't Seen to find you the page your're looking for
        </p>
        <div className="pt-8">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 rounded-full border border-e-gray-700 flex items-center justify-between gap-3 cursor-pointer animate-bounce hover:scale-102 duration-500 transition-all"
          >
            <span>Back To Home </span>
            <FaArrowCircleRight className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
