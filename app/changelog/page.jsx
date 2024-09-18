"use client";

import { useState } from "react";
import "../../styles/changelog.scss";

export default function Changelog() {
  const logs = [
    {
      title: "Changelog 1.5.1",
      date: "January 25, 2024",
      year: "2024",

      logsType: [
        {
          title: "Change",
          logsItem: [
            {
              text: "World Boss damage reduced in 150% (In progress of change)",
            },
            {
              text: "World Boss damage reduced in 150% (In progress of change)",
            },
          ],
        },

        {
          title: "Fixes",
          logsItem: [{ text: "Hanbal Event Fixed" }],
        },
      ],
    },

    {
      title: "Changelog 1.5.1",
      date: "January 25, 2024",
      year: "2024",

      logsType: [
        {
          title: "Change",
          logsItem: [
            {
              text: "World Boss damage reduced in 150% (In progress of change)",
            },
          ],
        },

        {
          title: "Fixes",
          logsItem: [{ text: "Crash fixes" }],
        },
      ],
    },

    {
      title: "Changelog 1.5.1",
      date: "July 02, 2023",
      year: "2023",

      logsType: [
        {
          title: "Change",
          logsItem: [
            {
              text: "World Boss damage reduced in 150% (In progress of change)",
            },
          ],
        },

        {
          title: "Fixes",
          logsItem: [{ text: "Crash fixes" }],
        },
      ],
    },
  ];

  const years = ["2024", "2023"];

  const [activeYear, setActiveYear] = useState(years[0]);

  const handleYearClick = (year) => {
    setActiveYear(year);
  };

  return (
    <div className="changelog">
      <div className="changelog_header container_changelog">
        <h1>Changelog</h1>
      </div>

      <div className="changelog_year container_changelog tabs">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => handleYearClick(year)}
            className={activeYear === year ? "active" : ""}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="changelog_logs container_changelog">
        {logs
          .filter((log) => log.year === activeYear)
          .map((log, index) => (
            <div className="changelog_logs-content" key={index}>
              <div className="date">
                <span>{log.date}</span>
              </div>

              <div className="logs">
                <h1>{log.title}</h1>

                {log.logsType.map((type, typeIndex) => (
                  <div key={typeIndex}>
                    <p>{type.title}</p>

                    <ul>
                      {type.logsItem.map((item, itemIndex) => (
                        <li key={itemIndex}>{item.text}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
