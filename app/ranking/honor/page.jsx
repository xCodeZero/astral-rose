"use client";

import "../../../styles/ranking.scss";
import Link from "next/link";
import React, { useState } from "react";

export default function HonorRanking() {
  const dummyData = [
    {
      name: "un1k",
      type: "Tank",
      level: "99",
    },

    {
      name: "Daniel",
      type: "Master",
      level: "99",
    },

    {
      name: "uni",
      type: "Swordmaster",
      level: "99",
    },

    {
      name: "uni",
      type: "Swordmaster",
      level: "99",
    },

    {
      name: "uni",
      type: "Swordmaster",
      level: "99",
    },

    {
      name: "uni",
      type: "Swordmaster",
      level: "99",
    },

    {
      name: "uni",
      type: "Swordmaster",
      level: "99",
    },

    {
      name: "uni",
      type: "Swordmaster",
      level: "99",
    },

    {
      name: "uni",
      type: "Swordmaster",
      level: "99",
    },

    {
      name: "uni",
      type: "Swordmaster",
      level: "99",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [dataTable, setFilteredData] = useState(dummyData);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    filterData(value, selectedType);
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setSelectedType(value);

    filterData(searchTerm, value);
  };

  const filterData = (search, type) => {
    const filteredResults = dummyData.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (type === "" || item.type === type)
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

          <h1>Honor Ranking</h1>
        </div>

        <div className="ranking_header-character">
          <img src="/images/download-character.png" alt="" />
        </div>
      </div>

      <div className="ranking_filters container">
        <div>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>

            <select value={selectedType} onChange={handleTypeChange}>
              <option value="">All Classes</option>
              <option value="Tank">Tank</option>
              <option value="Master">Master</option>
              <option value="Swordmaster">Swordmaster</option>
            </select>
          </span>
        </div>

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
              <th>Class</th>
              <th>Level</th>
            </tr>
          </thead>

          <tbody>
            {dataTable.map((item, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
