import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import reservationImage from "../../assets/reservation.png";
import { FaArrowCircleRight } from "react-icons/fa";

const Reservation = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/baharRoute/send",
        {
          firstName,
          lastName,
          email,
          phone,
          date,
          time,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setDate("");
      setPhone("");
      setTime("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="py-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 px-10">
        <div className="overflow-hidden">
          <img
            src={reservationImage}
            className="h-[300px] object-cover"
            alt=""
          />
        </div>
        {/* form section  */}
        <div className="shadow-[2px_5px_7px_rgba(0,0,0,0.5)] p-8 rounded-2xl space-y-8 w-full ">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-4xl font-extralight w-full tracking-wider">
              MAKE A RESERVATION
            </h1>
            <p className="text-lg font-extralight">
              For Further Questions, Please Call
            </p>
          </div>
          <form
            onSubmit={handleReservation}
            className="space-y-3 flex flex-col items-center gap-4"
          >
            <div className="flex gap-3 flex-col md:flex-row">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
                className="border-b py-2 outline-none px-2 font-light w-[180px] focus:border-gray-400 tracking-wider"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="border-b py-2 outline-none px-2 font-light w-[180px] focus:border-gray-400 tracking-wider"
              />
            </div>
            <div className="flex gap-3 flex-col md:flex-row">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border-b py-2 outline-none text-gray-500 px-2 font-light w-[180px] focus:border-gray-400 tracking-wider"
              />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="border-b py-2 outline-none px-2 text-gray-400 font-light w-[180px] focus:border-gray-400 tracking-wider"
              />
            </div>
            <div className="flex gap-3 flex-col md:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border-b py-2 outline-none px-2 font-light    w-[180px] focus:border-gray-400 tracking-wider"
              />
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="border-b py-2 outline-none px-2 font-light max-w-[180px] focus:border-gray-400 tracking-wider"
              />
            </div>
            <div className="">
              <button className="px-6 py-2 rounded-full border border-e-gray-700 flex items-center justify-between gap-3 cursor-pointer hover:scale-102">
                <span>RESERVE NOW </span>
                <FaArrowCircleRight className="text-lg" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
