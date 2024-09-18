"use client";

import "../../../styles/ranking.scss";
import Link from "next/link";
import React, { useState } from "react";

export default function GuildRanking() {
  const dummyData = [
    {
      name: "Knights",
      level: "99",
    },

    {
      name: "Warriors",
      level: "99",
    },

    {
      name: "United",
      level: "99",
    },

    {
      name: "United",
      level: "99",
    },

    {
      name: "United",
      level: "99",
    },

    {
      name: "United",
      level: "99",
    },

    {
      name: "United",
      level: "99",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [dataTable, setFilteredData] = useState(dummyData);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredResults = dummyData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  return (
    <div className="ranking">
      <div className="ranking_header">
        <div className="ranking_header-content ranking_inside container">
          <Link href="/ranking" className="ranking_back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
            Back to Ranking
          </Link>

          <h1>Guild Ranking</h1>
        </div>

        <div className="ranking_header-character">
          <img src="/images/download-character.png" alt="" />
        </div>
      </div>

      <div className="ranking_filters container">
        <div>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>

            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearch}
            />
          </span>
        </div>
      </div>

      <div className="ranking_table container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Level</th>
            </tr>
          </thead>

          <tbody>
            {dataTable.map((item, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
