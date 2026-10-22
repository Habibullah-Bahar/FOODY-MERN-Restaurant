import hero1 from "../../assets/hero1.png";
import threelines from "../../assets/threelines.svg";
import hero2 from "../../assets/hero2.png";
import Logo from "../../assets/logo.svg";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-r to-yellow-100 pb-10 transition-all duration-500">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-8 md:grid-cols-3 md:gap-6 lg:py-16">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <h1 className="font-extralight leading-none text-5xl sm:text-7xl md:text-5xl lg:text-6xl xl:text-7xl">
            Delicious
          </h1>
          <img
            src={hero1}
            alt="Delicious food"
            className="w-56 object-contain sm:w-72 md:w-full md:max-w-[220px] lg:max-w-[300px]"
          />
        </div>

        <div className="flex flex-col items-center gap-8 lg:gap-16">
          <div className="flex items-start gap-3">
            <h1 className="font-extralight leading-none text-5xl sm:text-7xl md:text-5xl lg:text-6xl xl:text-7xl">
              Food
            </h1>
            <img src={threelines} alt="" className="w-6 sm:w-7" />
          </div>
          <img src={Logo} alt="Logo" className="w-24 sm:w-32 lg:w-40" />
        </div>

        <div className="flex flex-col items-center gap-6">
          <img
            src={hero2}
            alt="Tasty dishes"
            className="h-72 w-56 rounded-2xl object-cover sm:h-96 sm:w-72 md:h-80 md:w-full md:max-w-[220px] lg:h-96 lg:max-w-[288px]"
          />
          <h1 className="font-extralight leading-none text-5xl sm:text-7xl md:text-5xl lg:text-6xl xl:text-7xl">
            Dishes
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;