import centerImage from "../../assets/center.svg";
import whoWeArePng from "../../assets/whoweare.png";

const detail = [
  { id: 1, number: "14", title: "Restaurants" },
  { id: 2, number: "20", title: "Chef In Kitchen" },
  { id: 3, number: "08", title: "Years Of Experience" },
  { id: 4, number: "200", title: "Food Dishes" },
];

const Details = () => {
  return (
    <section className="relative flex flex-col py-16">
      <div
        className="
         relative mx-auto mb-12 aspect-square w-[200px]
          sm:absolute sm:left-1/2 sm:top-1/2 sm:mb-0 sm:w-[300px]
          sm:-translate-x-1/2 sm:-translate-y-1/2
        "
      >
        <img
          src={whoWeArePng}
          alt="Who we are"
          className="absolute inset-0 h-full w-full object-contain"
        />
        <img
          src={centerImage}
          alt=""
          className="absolute inset-0 z-10 h-full w-full object-contain"
        />
      </div>

      <ul className="grid grid-cols-2 gap-y-12 sm:gap-y-24">
        {detail.map((item) => (
          <li key={item.id} className="mx-auto flex flex-col gap-4 sm:gap-6 w-[100px]">
            <p className="text-4xl font-light sm:text-6xl md:text-7xl">
              {item.number}
            </p>
            <p className="font-extralight tracking-wider text-xl">{item.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Details;
