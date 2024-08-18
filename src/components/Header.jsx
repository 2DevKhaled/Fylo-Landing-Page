// import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Logo from '/src/assets/images/logo.svg';
const navigation = [
  {
    key: 1,
    title: "Features",
    href: "/features",
  },
  {
    key: 2,
    title: "Team",
    href: "/team",
  },
  {
    key: 1,
    title: "Signin",
    href: "/signin",
  },
];
export default function Header() {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        headerRef.current.style.background = "#374357";
        headerRef.current.style.padding = "10px ";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "20px";
      }
    });
  });
  return (
    <header
      ref={headerRef}
      className=" pt-[20px] fixed top-0 z-50 left-0 w-full duration-500"
    >
      <div className="flex mx-auto items-center justify-between container gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a>
          <img className="w-28 " src={Logo}></img>
        </a>
        <nav>
          <ul className="flex items-center gap-4">
            {navigation.map((nav) => (
              <li key={nav.key} href={nav.href}>
                <a className="text-text100 text-lg opacity-[0.9] hover:text-[#8cdae4]">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
