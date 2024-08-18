import Profile1 from '/src/assets/images/profile-1.jpg';
import Profile2 from '/src/assets/images/profile-2.jpg';
import Profile3 from '/src/assets/images/profile-3.jpg';
import QuotesIcon from '/src/assets/images/bg-quotes.png';
const testData = [
  {
    key: 1,
    image:Profile1,
    des: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Satish Patel",
    position: "Founder & CEO, Hundle",
  },
  {
    key: 2,
    image:Profile2,
    des: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Bruce McKenzie",
    position: "Founder & CEO, Hundle",
  },
  {
    key: 3,
    image: Profile3,
    des: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Iva Boyd",
    position: "Founder & CEO, Hundle",
  },
];
import TestimonialBox from "./TestimonialBox";
export default function Testimonials() {
  return (
    <section className="py-[200px]">
      <div className="container mx-auto relative">
        <div
          className="absolute left-[5px] top-[-35px] shadow-[8px_8px_1px_8px_text100] "
        >
          <img
            className=""
            src={QuotesIcon}
            alt="quotes"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] relative z-10">
          {testData.map((item) => (
            <TestimonialBox
              key={item.key}
              image={item.image}
              des={item.des}
              name={item.name}
              position={item.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
