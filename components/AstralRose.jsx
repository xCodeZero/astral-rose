"use client";

import "../styles/astral.scss";
import React, { useState, useEffect } from "react";

const AstralRose = () => {
  const astralLink = "/";

  const games = [
    {
      title: "Tera",
      url: "/tera",
      icon: "/images/games/app_icon/tera.jpg",
      categories: ["PC", "MMORPG"],
    },

    {
      title: "MU Origin",
      url: "/muorigin",
      icon: "/images/games/app_icon/mu_origin.jpg",
      categories: ["PC", "Mobile", "MMORPG"],
    },

    {
      title: "Ragnarok",
      url: "/ragnarok",
      icon: "/images/games/app_icon/ragnarok.png",
      categories: ["PC", "Mobile"],
    },
  ];

  //

  const [isActive, setIsActive] = useState(false);

  const astralMenuClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 1;
      const hasScrolledPastThreshold = window.scrollY > scrollThreshold;

      if (hasScrolledPastThreshold && isActive) {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  const astralMenu = [
    {
      title: "Support",
      url: "/support",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
        </svg>
      ),
    },

    {
      title: "Recharge",
      url: "/recharge",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="astral">
      <ul className="n-l">
        <li className={`n-l_m ${isActive ? "active" : ""}`}>
          <div className="n-l_m-i" onClick={astralMenuClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="n-l_m-c">
            <div className="n-l_m-c_w">
              <h5>Games</h5>

              <ul className="n-l_m-c_w-list">
                {games.map((game, index) => (
                  <li key={index}>
                    <a href={game.url} target="_blank">
                      <div>
                        <img src={game.icon} alt="" />
                      </div>

                      <div>
                        <p>{game.title}</p>

                        <ul>
                          {game.categories.map((category, categoryIndex) => (
                            <li key={categoryIndex}>{category}</li>
                          ))}
                        </ul>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="astral_w-m">
                <h5>Astral Rose Online</h5>

                <ul>
                  {astralMenu.map((astral, index) => (
                    <li key={index}>
                      <a href={astral.url}>
                        {astral.icon}
                        {astral.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <ul className="n-m">
        <li>
          <a href={astralLink}>
            <img src="/images/nav_logo2.png" alt="" />
          </a>
        </li>
      </ul>

      <ul className="n-r">
        <li className="user">
          <a href="/">
            User Panel
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AstralRose;
