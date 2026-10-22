import { useEffect, useState } from "react";
import timeoutImage from "../assets/sandwich.png";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const Success = () => {
  const [countDown, setCountDown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeId = setInterval(() => {
      setCountDown((prev) => {
        if (prev === 1) {
          clearInterval(timeId);
          navigate("/");
        } else return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timeId);
  }, [navigate]);
  return (
    <div>
      <div className="flex flex-col items-center space-y-8 font-light py-8 justify-center ">
        <div>
          <img
            src={timeoutImage}
            alt=""
            className="max-w-[400px] drop-shadow-[5px_7px_8px_rgba(0,0,0,0.3)] "
          />
        </div>
        <h1 className="text-2xl"> Redirecting to Home in {countDown} seconds... </h1>
        <Link to="/">
          <button className="px-6 py-2 rounded-full border border-e-gray-700 flex items-center justify-between gap-3 cursor-pointer hover:scale-102">
            <span>Back To Home </span>
            <FaArrowCircleRight className="text-lg" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
