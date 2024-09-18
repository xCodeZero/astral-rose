import Link from "next/link";
import styles from "../../styles/page.module.css";

const Header = () => {
  const newsList = [
    {
      url: "/",
      thumb: "/images/news.png",
      title: "Changelog 1.5.1",
      date: "July 20 2023",
    },

    {
      url: "/",
      thumb: "/images/news.png",
      title: "Changelog 1.5.1",
      date: "July 20 2023",
    },

    {
      url: "/",
      thumb: "/images/news.png",
      title: "Changelog 1.5.1",
      date: "July 20 2023",
    },

    {
      url: "/",
      thumb: "/images/news.png",
      title: "Changelog 1.5.1",
      date: "July 20 2023",
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerStatus}>
        <span>Game:</span>
        <p className={styles.online}>On</p>
      </div>

      <div className={styles.headerEffect}>
        <img src="/images/spark.png" alt="" />
        <img src="/images/spark.png" alt="" />
      </div>

      <div className={styles.headerTop}>
        <img className={styles.headerLogo} src="/images/astral-rose-logo.png" />
        <img
          className={styles.headerCharacter}
          src="/images/home_image.png"
          alt=""
        />

        <h1>Changelog 1.5.1</h1>

        <Link href="/">
          <span>
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </span>
        </Link>
      </div>

      <div className={styles.headerNews}>
        <ul>
          {newsList.map((news, index) => (
            <li key={index}>
              <Link href={news.url}>
                <img src={news.thumb} />

                <div>
                  <h2>{news.title}</h2>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                    {news.date}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
