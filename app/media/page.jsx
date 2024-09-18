"use client";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";

import "../../styles/media.scss";

export default function Media() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const lightbox = [
    {
      type: "video",
      videoThumb: "/images/news.png",
      videoLink:
        "https://www.youtube.com/embed/kKGaRS6oBfA?si=Axk0O1cyhGqSMqDS",
    },

    {
      type: "img",
      imgThumb: "/images/news.png",
      imgPath: "/images/news.png",
    },

    {
      type: "img",
      imgThumb: "/images/news.png",
      imgPath: "/images/news.png",
    },

    {
      type: "img",
      imgThumb: "/images/news.png",
      imgPath: "/images/news.png",
    },

    {
      type: "video",
      videoThumb: "/images/news.png",
      videoLink:
        "https://www.youtube.com/embed/kKGaRS6oBfA?si=Axk0O1cyhGqSMqDS",
    },

    {
      type: "img",
      imgThumb: "/images/news.png",
      imgPath: "/images/news.png",
    },
  ];

  return (
    <div className="media">
      <div className="media_header container_media">
        <h1>Media</h1>
      </div>

      <div className="media_gallery container_media">
        <LightGallery onInit={onInit} speed={500} plugins={[lgVideo, lgZoom]}>
          {lightbox.map((item, index) => {
            if (item.type === "video") {
              return (
                <a key={index} data-src={item.videoLink} className={item.type}>
                  <img src="/images/media/play.png" alt="" />
                  <img className="thumb" src={item.videoThumb} alt="" />
                </a>
              );
            } else if (item.type === "img") {
              return (
                <a key={index} data-src={item.imgPath} className={item.type}>
                  <img className="thumb" src={item.imgThumb} alt="" />
                </a>
              );
            }

            return null;
          })}
        </LightGallery>
      </div>
    </div>
  );
}
