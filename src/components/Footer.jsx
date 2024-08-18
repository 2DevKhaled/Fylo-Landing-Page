import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from '/src/assets/images/logo.svg';
import PhoneIcon from '/src/assets/images/icon-phone.svg';
import EmailIcon from '/src/assets/images/icon-email.svg';
import LocationIcon from '/src/assets/images/icon-location.svg'
const dataContact = [
  {
    key: 1,
    text: "+1-543-123-4567",
    icon: PhoneIcon,
  },
  {
    key: 2,
    text: "example@fylo.com",
    icon: EmailIcon,
  },
];
const links = [
  {
    key: 1,
    title: "About Us",
  },
  {
    key: 2,
    title: "Jobs",
  },
  {
    key: 3,
    title: "Press",
  },
  {
    key: 4,
    title: "Blog",
  },
  {
    key: 5,
    title: "Contact Us",
  },

  {
    key: 6,
    title: "Terms",
  },

  {
    key: 7,
    title: "Privacy",
  },
];
const socialIcons = [
  { key: 1, icon: "facebook" },
  { key: 2, icon: "twitter" },
  { key: 3, icon: "instagram" },
];
export default function Footer() {
  return (
    <section className="bg-[#0c1524] pt-[320px] pb-[150px] px-[100px]">
      <div className="container mx-auto">
        <a href="/">
          <img
            src={Logo}
            alt="logo"
            className="w-[175px] h-[66px] object-contain "
          />
        </a>
        <div className="flex justify-between mt-[40px] ">
          <div className="flex  gap-[15px] w-[340px] max-w-full">
            <img
              src={LocationIcon}
              alt="location-icon"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="text-sm font-normal text-text100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div>
            {dataContact.map((item) => (
              <div
                key={item.key}
                className="flex gap-[25px] text-text200 items-center mt-[10px]"
              >
                <img className="w-18px] h-[18px] " src={item.icon} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]  text-text100">
            {links.map((item) => (
              <li key={item.key} className="mt-[10px]">
                <a href={`/${links}`}>{item.title}</a>
              </li>
            ))}
          </ul>
          <ul className="flex justify-center md:w-auto gap-[15px] text-text100">
            {socialIcons.map((item) => (
              <li key={item.key}>
                <a className="hover:text-primary100 transition-colors duration-200 text-base ">
                  <div className="w-[40px] h-[40px] element-center  border border-[#fff] rounded-full">
                    {item.icon === "facebook" ? (
                      <FaFacebook />
                    ) : item.icon === "twiiter" ? (
                      <FaTwitter />
                    ) : (
                      <FaInstagram />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
