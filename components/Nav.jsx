"use client";

import Link from "next/link";
import "../styles/nav.scss";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const currentRoute = usePathname();

  const activeStyle = " active";
  const nonActiveStyle = " ";

  const socialLinks = [
    {
      link: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 640 512"
        >
          <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
        </svg>
      ),
    },

    {
      link: "/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
        </svg>
      ),
    },

    {
      link: "/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
        </svg>
      ),
    },
  ];

  const navLinks = [
    {
      url: "/",
      currentUrl: "/",
      title: "Main",
    },

    {
      url: "/download",
      currentUrl: "/download",
      title: "Download",
    },

    {
      url: "/news",
      currentUrl: "/news",
      title: "News",
    },

    {
      url: "/changelog",
      currentUrl: "/changelog",
      title: "Changelog",
    },

    {
      url: "/event",
      currentUrl: "/event",
      title: "Events",
    },

    {
      url: "/ranking",
      currentUrl: "/ranking",
      title: "Ranking",
    },

    {
      url: "/media",
      currentUrl: "/media",
      title: "Media",
    },

    {
      url: "/wiki",
      currentUrl: "/wiki",
      title: "Wiki",
    },
  ];

  //

  const [isActive, setIsActive] = useState(false);

  const mobileMenu = () => {
    setIsActive(!isActive);
  };

  //

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollThreshold = 1;
  const shouldAddClass = scrollY > scrollThreshold;

  return (
    <nav>
      <ul
        className={`${shouldAddClass ? "scrolled" : ""} ${
          isActive ? "active" : ""
        }`}
      >
        <li>
          <img src="/images/astral-rose-logo.png" />
        </li>

        {navLinks.map((nav, index) => (
          <li onClick={mobileMenu} key={index}>
            <Link
              href={nav.url}
              className={
                currentRoute === nav.currentUrl ? activeStyle : nonActiveStyle
              }
            >
              <p>{nav.title}</p>
            </Link>
          </li>
        ))}

        <li className="social_d">
          <div className="social">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.link}>
                {social.icon}
              </a>
            ))}
          </div>
        </li>
      </ul>

      <ul className="navR">
        <li>
          <Link href="/download">
            <span>
              <p>Start</p>
            </span>
          </Link>
        </li>
      </ul>

      <div onClick={mobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navigation;
