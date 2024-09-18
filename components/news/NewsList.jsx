"use client";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";

const NewsList = () => {
  /*

    // Data fetch

    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState([]);

    const fetchMoreData = () => {
        setTimeout(() => {
            setItems((prevItems) => [...prevItems, ...Array(6).keys()]);
        }, 500);
    };
    
    */

  const initialItems = [
    {
      tag: "Notice",
      thumb: "/images/news.png",
      title: "New 1",
      date: "July 20 2024",
    },

    {
      tag: "Notice",
      thumb: "/images/news.png",
      title: "New 1",
      date: "July 20 2024",
    },

    {
      tag: "Notice",
      thumb: "/images/news.png",
      title: "New 1",
      date: "July 20 2024",
    },

    {
      tag: "Event",
      thumb: "/images/news.png",
      title: "New 1",
      date: "July 20 2024",
    },

    {
      tag: "Event",
      thumb: "/images/news.png",
      title: "New 1",
      date: "July 20 2024",
    },

    {
      tag: "Event",
      thumb: "/images/news.png",
      title: "New 1",
      date: "July 20 2024",
    },
  ];

  const allItems = [...initialItems]; //, ...items];

  const [currentFilter, setCurrentFilter] = useState("All");
  const filteredItems =
    currentFilter === "All"
      ? allItems
      : allItems.filter((item) => item.tag === currentFilter);

  return (
    <>
      <div className="news_filters container_new">
        <button
          onClick={() => setCurrentFilter("All")}
          className={currentFilter === "All" ? "active" : ""}
        >
          All
        </button>

        <button
          onClick={() => setCurrentFilter("Notice")}
          className={currentFilter === "Notice" ? "active" : ""}
        >
          Notice
        </button>

        <button
          onClick={() => setCurrentFilter("Event")}
          className={currentFilter === "Event" ? "active" : ""}
        >
          Event
        </button>
      </div>

      <InfiniteScroll
        dataLength={allItems.length}
        // next={fetchMoreData}
        // hasMore={hasMore}
      >
        <ul className="news_list container_new">
          {allItems.map(
            (item, index) =>
              (currentFilter === "All" || item.tag === currentFilter) && (
                <li key={index}>
                  <Link href="/">
                    <div>
                      <span>{item.tag}</span>

                      <img src={item.thumb} alt="" />
                    </div>

                    <div>
                      <h2>{item.title}</h2>

                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                        </svg>
                        {item.date}
                      </span>
                    </div>
                  </Link>
                </li>
              )
          )}
        </ul>
      </InfiniteScroll>
    </>
  );
};

export default NewsList;
