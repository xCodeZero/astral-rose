"use client";

import { useState } from "react";
import "../../styles/event.scss";
import Link from "next/link";

export default function Event() {
  const events = [
    {
      url: "/",
      thumb: "/images/news.png",
      status: "ongoing",
      title: "Double Exp",
      date: "From January 20 to January 25",
    },

    {
      url: "/",
      thumb: "/images/news.png",
      status: "ongoing",
      title: "Double Exp",
      date: "From January 20 to January 25",
    },

    {
      url: "/",
      thumb: "/images/news.png",
      status: "ongoing",
      title: "Double Exp",
      date: "From January 20 to January 25",
    },

    {
      url: "/",
      thumb: "/images/news.png",
      status: "ended",
      title: "Double Exp",
      date: "From January 20 to January 25",
    },
  ];

  const eventStatus = ["ongoing", "ended"];

  const [activeStatus, setActiveStatus] = useState(eventStatus[0]);

  const handleYearClick = (status) => {
    setActiveStatus(status);
  };

  return (
    <div className="event">
      <div className="event_header container_event">
        <h1>Events</h1>
      </div>

      <div className="event_status container_event">
        {eventStatus.map((status) => (
          <button
            key={status}
            onClick={() => handleYearClick(status)}
            className={activeStatus === status ? "active" : ""}
          >
            {status}
          </button>
        ))}
      </div>

      <ul className="event_list container_event">
        {events
          .filter((event) => event.status === activeStatus)
          .map((event, index) => (
            <li key={index}>
              <Link href={event.url}>
                <div>
                  <span className={event.status}>{event.status}</span>
                  <img src={event.thumb} alt="" />
                </div>

                <div>
                  <h1>{event.title}</h1>

                  <span>
                    Event Duration:
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                      </svg>
                      {event.date}
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
